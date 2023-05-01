import {
  LoginRequest,
  LoginResponse,
  User,
} from "../grpc/proto/services/user/user_service_pb";

export class LoginRequestDTO {
  name!: string;
  password!: string;
  email!: string;

  constructor(dto: Partial<LoginRequestDTO>) {
    Object.assign(this, dto);
  }

  public toProto(): LoginRequest {
    const proto = new LoginRequest()
      .setEmail(this.email)
      .setPassword(this.password);
    console.log(`Generated proto: ${proto.getEmail}`);
    return proto;
  }
}

export class LoginResponseDTO {
  name!: string;
  password!: string;
  email!: string;

  constructor(dto: Partial<LoginResponseDTO>) {
    Object.assign(this, dto);
  }

  public static fromProto(proto: LoginResponse): LoginResponseDTO {
    return new LoginResponseDTO({
      name: proto.getUserInfo()?.getName(),
      password: proto.getUserInfo()?.getPassword(),
      email: proto.getUserInfo()?.getEmail(),
    });
  }
}
