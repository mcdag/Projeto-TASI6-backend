import {
  SignUpRequest,
  User,
} from "../grpc/proto/services/user/user_service_pb";

export class SignUpRequestDTO {
  name!: string;
  password!: string;
  email!: string;

  constructor(dto: Partial<SignUpRequestDTO>) {
    Object.assign(this, dto);
  }

  public toProto(): SignUpRequest {
    const proto = new SignUpRequest();
    const user = new User()
      .setEmail(this.email)
      .setName(this.name)
      .setPassword(this.password);
    proto.setUser(user);
    console.log(`Generated proto: ${proto.getUser()?.getName()}`);
    return proto;
  }
}
