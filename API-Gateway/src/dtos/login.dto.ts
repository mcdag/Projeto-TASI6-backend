import {
  LoginRequest,
  LoginResponse,
} from "../grpc/proto/services/auth/auth_service_pb";

export class LoginRequestDTO {
  username!: string;
  password!: string;

  constructor(dto: Partial<LoginRequestDTO>) {
    Object.assign(this, dto);
  }

  public toProto(): LoginRequest {
    const proto = new LoginRequest()
      .setUsername(this.username)
      .setPassword(this.password);
    console.log(`Generated proto: ${proto.getUsername}`);
    return proto;
  }
}

export class LoginResponseDTO {
  userId!: string;
  authToken!: string;

  constructor(dto: Partial<LoginResponseDTO>) {
    Object.assign(this, dto);
  }

  public static fromProto(proto: LoginResponse): LoginResponseDTO {
    return new LoginResponseDTO({
      userId: proto.getUserId(),
      authToken: proto.getAuthToken(),
    });
  }
}
