import { credentials } from "grpc";
import { SignUpRequestDTO } from "../../../dtos/signup.dto";
import { UserServiceClient } from "../../proto/services/user/user_service_grpc_pb";
import {
  CreateUserRequest,
  CreateUserResponse,
} from "../../proto/services/user/user_service_pb";

const client = new UserServiceClient(
  `localhost:${process.env.REPORT_SERVICE_PORT}`,
  credentials.createInsecure()
);

export class UserServiceGRPC {
  public async createUser(
    createUserRequest: CreateUserRequest
  ): Promise<CreateUserResponse | undefined> {
    console.log("Creating report");
    client.createUser(createUserRequest, (error, response) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }
      console.info(response.getUserId());
      return response;
    });
    process.exit(1);
  }
}
