import { credentials } from "grpc";
import { SignUpRequestDTO } from "../../../dtos/signup.dto";
import { UserServiceClient } from "../../proto/services/user/user_service_grpc_pb";

const client = new UserServiceClient(
  `localhost:${process.env.REPORT_SERVICE_PORT}`,
  credentials.createInsecure()
);

export class UserServiceGRPC {
  public signUp(dto: SignUpRequestDTO): boolean {
    console.log("Creating report");
    client.signUp(dto.toProto(), (error, response) => {
      if (error) {
        console.error(error);

        process.exit(1);
      }
      console.info(response.getCreated());
      return response.getCreated();
    });
    return false;
  }
}
