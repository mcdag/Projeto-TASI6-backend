import { SignUpRequest } from "../grpc/proto/services/auth/auth_service_pb";
import {
  CreateUserRequest,
  User,
} from "../grpc/proto/services/user/user_service_pb";

export class SignUpRequestDTO {
  name!: string;
  password!: string;
  email!: string;
  username!: string;

  constructor(dto: Partial<SignUpRequestDTO>) {
    Object.assign(this, dto);
  }

  public toCreateUserProto(): CreateUserRequest {
    const proto = new CreateUserRequest();
    const user = new User()
      .setEmail(this.email)
      .setName(this.name)
      .setUsername(this.username);
    proto.setUser(user);
    console.log(`Generated proto: ${proto.getUser()?.getName()}`);
    return proto;
  }
}
