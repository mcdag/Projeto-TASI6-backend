// package: services.auth
// file: proto/services/auth/auth_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_auth_auth_service_pb from "../../../proto/services/auth/auth_service_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signUp: IAuthServiceService_ISignUp;
    login: IAuthServiceService_ILogin;
}

interface IAuthServiceService_ISignUp extends grpc.MethodDefinition<proto_services_auth_auth_service_pb.SignUpRequest, proto_services_auth_auth_service_pb.SignUpResponse> {
    path: "/services.auth.AuthService/SignUp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_auth_auth_service_pb.SignUpRequest>;
    requestDeserialize: grpc.deserialize<proto_services_auth_auth_service_pb.SignUpRequest>;
    responseSerialize: grpc.serialize<proto_services_auth_auth_service_pb.SignUpResponse>;
    responseDeserialize: grpc.deserialize<proto_services_auth_auth_service_pb.SignUpResponse>;
}
interface IAuthServiceService_ILogin extends grpc.MethodDefinition<proto_services_auth_auth_service_pb.LoginRequest, proto_services_auth_auth_service_pb.LoginResponse> {
    path: "/services.auth.AuthService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_auth_auth_service_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<proto_services_auth_auth_service_pb.LoginRequest>;
    responseSerialize: grpc.serialize<proto_services_auth_auth_service_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<proto_services_auth_auth_service_pb.LoginResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
    signUp: grpc.handleUnaryCall<proto_services_auth_auth_service_pb.SignUpRequest, proto_services_auth_auth_service_pb.SignUpResponse>;
    login: grpc.handleUnaryCall<proto_services_auth_auth_service_pb.LoginRequest, proto_services_auth_auth_service_pb.LoginResponse>;
}

export interface IAuthServiceClient {
    signUp(request: proto_services_auth_auth_service_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: proto_services_auth_auth_service_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: proto_services_auth_auth_service_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    login(request: proto_services_auth_auth_service_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: proto_services_auth_auth_service_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: proto_services_auth_auth_service_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public signUp(request: proto_services_auth_auth_service_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: proto_services_auth_auth_service_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: proto_services_auth_auth_service_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public login(request: proto_services_auth_auth_service_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: proto_services_auth_auth_service_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: proto_services_auth_auth_service_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_auth_auth_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
