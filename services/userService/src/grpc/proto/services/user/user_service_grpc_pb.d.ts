// package: services.user
// file: proto/services/user/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_user_user_service_pb from "../../../proto/services/user/user_service_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    signUp: IUserServiceService_ISignUp;
}

interface IUserServiceService_ISignUp extends grpc.MethodDefinition<proto_services_user_user_service_pb.SignUpRequest, proto_services_user_user_service_pb.SignUpResponse> {
    path: "/services.user.UserService/SignUp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_user_user_service_pb.SignUpRequest>;
    requestDeserialize: grpc.deserialize<proto_services_user_user_service_pb.SignUpRequest>;
    responseSerialize: grpc.serialize<proto_services_user_user_service_pb.SignUpResponse>;
    responseDeserialize: grpc.deserialize<proto_services_user_user_service_pb.SignUpResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    signUp: grpc.handleUnaryCall<proto_services_user_user_service_pb.SignUpRequest, proto_services_user_user_service_pb.SignUpResponse>;
}

export interface IUserServiceClient {
    signUp(request: proto_services_user_user_service_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: proto_services_user_user_service_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    signUp(request: proto_services_user_user_service_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public signUp(request: proto_services_user_user_service_pb.SignUpRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: proto_services_user_user_service_pb.SignUpRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
    public signUp(request: proto_services_user_user_service_pb.SignUpRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.SignUpResponse) => void): grpc.ClientUnaryCall;
}
