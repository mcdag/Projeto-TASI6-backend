import { credentials } from "grpc";
import { LoginRequestDTO } from "../dtos/login.dto";
import { SignUpRequestDTO } from "../dtos/signup.dto";
import { UserServiceClient } from "../grpc/proto/services/user/user_service_grpc_pb";

export default class UserController {
  userServiceGRPC: UserServiceClient;

  constructor() {
    this.userServiceGRPC = new UserServiceClient(
      `localhost:${process.env.USER_SERVICE_PORT}`,
      credentials.createInsecure()
    );
  }

  async signUp(req, res): Promise<void> {
    const dto = new SignUpRequestDTO(req.body);

    console.log(`req: ${dto.name}`);

    const signUpRequest = dto.toProto();
    console.log(`Sign-up request: ${signUpRequest}`);

    this.userServiceGRPC.signUp(signUpRequest, (error, response) => {
      res.status(201).send({ created: response.getCreated() });
    });
  }

  async login(req, res): Promise<void> {
    const dto = new LoginRequestDTO(req.body);

    console.log(`req: ${dto.email}`);

    console.log(`Login request: ${Object.keys(dto)}`);
    const loginRequest = dto.toProto();
    console.log(`Login request: ${loginRequest}`);

    this.userServiceGRPC.login(loginRequest, (error, response) => {
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
      res.status(201).json();
    });
  }
}
