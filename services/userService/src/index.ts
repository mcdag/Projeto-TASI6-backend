import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { dataSource } from "./app-data-source";
import { User as UserEntity } from "./data/entities/user.entity";

import dotenv from "dotenv-safe";
import {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
  User,
} from "./grpc/proto/services/user/user_service_pb";
import { UserServiceService } from "./grpc/proto/services/user/user_service_grpc_pb";

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

const login = async (
  call: ServerUnaryCall<LoginRequest, LoginResponse>,
  callback: sendUnaryData<LoginResponse>
) => {
  try {
    console.log(`request login: ${call.request.getEmail()}`);
    const user = await repository.findOne({
      select: {
        email: true,
        password: true,
        name: true,
      },
      where: {
        email: call.request.getEmail(),
      },
    });

    if (user == null) {
      callback({
        code: 3,
        message: "email ou senha invalidos",
      });
    }

    if (user?.password != call.request.getPassword()) {
      callback({
        code: 3,
        message: "email ou senha invalidos",
      });
    }

    const response = new LoginResponse().setUserInfo(
      new User()
        .setEmail(user!.email)
        .setPassword(user!.password)
        .setName(user!.name)
    );
    console.log(`response: ${response}`);
    callback(null, response);
  } catch (e) {
    console.log(e);
    callback({
      code: 13,
      message: "internal server error",
    });
  }
};

const server = new Server();

server.addService(UserServiceService, { signUp, login });

server.bindAsync("0.0.0.0:5001", ServerCredentials.createInsecure(), () => {
  server.start();

  console.log("server is running on 0.0.0.0:5001");
});
