import { credentials } from "grpc";
import { SignUpRequestDTO } from "../../../dtos/signup.dto";
import { AuthServiceClient } from "../../proto/services/auth/auth_service_grpc_pb";
import {
  SignUpRequest,
  SignUpResponse,
} from "../../proto/services/auth/auth_service_pb";

const client = new AuthServiceClient(
  `localhost:${process.env.REPORT_SERVICE_PORT}`,
  credentials.createInsecure()
);

export class AuthServiceGRPC {
  public async signUp(
    signUpRequest: SignUpRequest
  ): Promise<SignUpResponse | undefined> {
    console.log("Creating report");
    client.signUp(signUpRequest, (error, response) => {
      if (error) {
        console.error(error);

        process.exit(1);
      }
      console.info(response.getUserid());
      return response;
    });
    process.exit(1);
  }
}
