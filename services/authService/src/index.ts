import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { dataSource } from "./app-data-source";

import dotenv from "dotenv-safe";
import { UserAuth } from "./data/entities/user-auth.entity";
import {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
} from "./grpc/proto/services/auth/auth_service_pb";
import { AuthServiceService } from "./grpc/proto/services/auth/auth_service_grpc_pb";

dotenv.config({
  path: ".env",
});

const uuid = require("uuid");

dataSource.initialize().then(() => console.log("Datasource initialized"));

const repository = dataSource.getRepository(UserAuth);

const convertToEntity = (proto: SignUpRequest): UserAuth => {
  const user = new UserAuth({
    user_id: proto.getUserId(),
    username: proto.getUsername(),
    password: proto.getPassword(),
    authToken: uuid.v4(),
    authTokenCreatedAt: new Date(),
    authTokenExpirationDate: new Date(),
  });

  return user;
};
const signUp = async (
  call: ServerUnaryCall<SignUpRequest, SignUpResponse>,
  callback: sendUnaryData<SignUpResponse>
) => {
  try {
    console.log(`request create user: ${call.request.getUserId()}`);
    const user = await repository.save(convertToEntity(call.request));
    const response = new SignUpResponse().setUserid(user.user_id);
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

const login = async (
  call: ServerUnaryCall<LoginRequest, LoginResponse>,
  callback: sendUnaryData<LoginResponse>
) => {
  // try {
  //   console.log(`request login: ${call.request.getEmail()}`);
  //   const user = await repository.findOne({
  //     select: {
  //       email: true,
  //       password: true,
  //       name: true,
  //     },
  //     where: {
  //       email: call.request.getEmail(),
  //     },
  //   });
  //   if (user == null) {
  //     callback({
  //       code: 3,
  //       message: "email ou senha invalidos",
  //     });
  //   }
  //   if (user?.password != call.request.getPassword()) {
  //     callback({
  //       code: 3,
  //       message: "email ou senha invalidos",
  //     });
  //   }
  //   const response = new LoginResponse().setUserInfo(
  //     new User()
  //       .setEmail(user!.email)
  //       .setPassword(user!.password)
  //       .setName(user!.name)
  //   );
  //   console.log(`response: ${response}`);
  //   callback(null, response);
  // } catch (e) {
  //   console.log(e);
  //   callback({
  //     code: 13,
  //     message: "internal server error",
  //   });
  // }
};

const server = new Server();

server.addService(AuthServiceService, { signUp });

server.bindAsync("localhost:5002", ServerCredentials.createInsecure(), () => {
  server.start();

  console.log("server is running on 0.0.0.0:5002");
});
