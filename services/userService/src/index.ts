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
  SignUpRequest,
  SignUpResponse,
  User,
} from "./grpc/proto/services/user/user_service_pb";

dotenv.config({
  path: ".env",
});

dataSource.initialize().then(() => console.log("Datasource initialized"));

const repository = dataSource.getRepository(UserEntity);

const convertToEntity = (proto: SignUpRequest): UserEntity => {
  const user = new UserEntity();
  user.email = proto.getUser()?.getEmail() ?? "";
  user.name = proto.getUser()?.getName() ?? "";
  user.password = proto.getUser()?.getPassword() ?? "";

  return user;
};

const signUp = async (
  call: ServerUnaryCall<SignUpRequest, SignUpResponse>,
  callback: sendUnaryData<SignUpResponse>
) => {
  try {
    console.log(`request create user: ${call.request.getUser()}`);
    const user = await repository.save(convertToEntity(call.request));

    const response = new SignUpResponse().setCreated(true);
    console.log(`response: ${response}`);
    callback(null, response);
  } catch (e) {
    console.log(e);
    callback(null, new SignUpResponse().setCreated(false));
  }
};

const server = new Server();

server.addService(UserServiceService, { signUp });

server.bindAsync("0.0.0.0:5001", ServerCredentials.createInsecure(), () => {
  server.start();

  console.log("server is running on 0.0.0.0:5001");
});
