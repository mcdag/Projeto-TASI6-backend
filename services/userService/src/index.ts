import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { dataSource } from "./app-data-source";
import { User as UserEntity } from "./data/entities/user.entity";

import dotenv from "dotenv-safe";
import { UserServiceService } from "./grpc/proto/services/user/user_service_grpc_pb";
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserInfoRequest,
  GetUserInfoResponse,
} from "./grpc/proto/services/user/user_service_pb";

dotenv.config({
  path: ".env",
});

dataSource.initialize().then(() => console.log("Datasource initialized"));

const repository = dataSource.getRepository(UserEntity);
const uuid = require("uuid");

const convertToEntity = (proto: CreateUserRequest): UserEntity => {
  const user = new UserEntity();
  user.id = uuid.v4();
  user.email = proto.getUser()?.getEmail() ?? "";
  user.name = proto.getUser()?.getName() ?? "";
  user.username = proto.getUser()?.getUsername() ?? "";

  return user;
};

const createUser = async (
  call: ServerUnaryCall<CreateUserRequest, CreateUserResponse>,
  callback: sendUnaryData<CreateUserResponse>
) => {
  try {
    console.log(`request create user: ${call.request.getUser()}`);
    const user = await repository.save(convertToEntity(call.request));

    const response = new CreateUserResponse().setUserId(user.id);
    console.log(`response: ${response}`);
    callback(null, response);
  } catch (e) {
    console.log(e);
    callback(
      {
        code: 13,
        message: "internal server error",
      },
      null
    );
  }
};

const getUserInfo = async (
  call: ServerUnaryCall<GetUserInfoRequest, GetUserInfoResponse>,
  callback: sendUnaryData<GetUserInfoResponse>
) => {
  try {
    console.log(`request create user: ${call.request.getUserId()}`);
    const user = await repository.findOne({
      select: { id: true, username: true, email: true, name: true },
      where: { id: call.request.getUserId() },
    });

    const response = new GetUserInfoResponse()
      .setEmail(user?.email!)
      .setName(user?.name!)
      .setUsername(user?.username!);
    console.log(`response: ${response}`);
    callback(null, response);
  } catch (e) {
    console.log(e);
    callback(
      {
        code: 13,
        message: "internal server error",
      },
      null
    );
  }
};

const server = new Server();

server.addService(UserServiceService, { createUser, getUserInfo });

server.bindAsync("0.0.0.0:5001", ServerCredentials.createInsecure(), () => {
  server.start();

  console.log("server is running on 0.0.0.0:5001");
});
