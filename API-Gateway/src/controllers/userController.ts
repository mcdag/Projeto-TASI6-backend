import { response } from "express";
import { credentials } from "grpc";
import { LoginRequestDTO } from "../dtos/login.dto";
import { SignUpRequestDTO } from "../dtos/signup.dto";
import { AuthServiceClient } from "../grpc/proto/services/auth/auth_service_grpc_pb";
import { SignUpRequest } from "../grpc/proto/services/auth/auth_service_pb";
import { UserServiceClient } from "../grpc/proto/services/user/user_service_grpc_pb";

export default class UserController {
  userServiceGRPC: UserServiceClient;
  authServiceGRPC: AuthServiceClient;

  constructor() {
    this.userServiceGRPC = new UserServiceClient(
      `localhost:${process.env.USER_SERVICE_PORT}`,
      credentials.createInsecure()
    );
    this.authServiceGRPC = new AuthServiceClient(
      `localhost:${process.env.AUTH_SERVICE_PORT}`,
      credentials.createInsecure()
    );
  }

  async signUp(req, res): Promise<void> {
    const dto = new SignUpRequestDTO(req.body);
    console.log(`signUp requested: ${req.body}`);

    const createUserRequest = dto.toCreateUserProto();
    this.userServiceGRPC.createUser(createUserRequest, (error, response) => {
      console.log(`created user id: ${response.getUserId()}`);
      const userId = response.getUserId();
      const signUpRequest = new SignUpRequest()
        .setUserId(userId)
        .setPassword(dto.password)
        .setUsername(dto.username);
      console.log(`sign Up auth request: ${signUpRequest.getUserId()}`);
      this.authServiceGRPC.signUp(signUpRequest, (error, response) => {
        console.log(`created auth: ${error?.message}`);
        console.log(`created auth: ${response}`);
        res.status(201).send({ userId: response.getUserid() });
      });
    });
  }

  async login(req, res): Promise<void> {
    const dto = new LoginRequestDTO(req.body);

    console.log(`req: ${dto.username}`);

    console.log(`Login request: ${Object.keys(dto)}`);
    const loginRequest = dto.toProto();
    console.log(`Login request: ${loginRequest}`);

    this.authServiceGRPC.login(loginRequest, (error, response) => {
      if (error) {
        switch (error.code) {
          case 3:
            res.status(401).send(error.message);
            return;
          case 13:
            res.status(500).send(error.message);
            return;
        }
      }
      res.status(200).json({
        userId: response.getUserId(),
        authToken: response.getAuthToken(),
      });
    });
  }
}
