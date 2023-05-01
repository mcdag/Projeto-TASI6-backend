// package: services.user
// file: proto/services/user/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_user_user_service_pb from "../../../proto/services/user/user_service_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserServiceService_ICreateUser;
}

interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<proto_services_user_user_service_pb.CreateUserRequest, proto_services_user_user_service_pb.CreateUserResponse> {
    path: "/services.user.UserService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_user_user_service_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<proto_services_user_user_service_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<proto_services_user_user_service_pb.CreateUserResponse>;
    responseDeserialize: grpc.deserialize<proto_services_user_user_service_pb.CreateUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    createUser: grpc.handleUnaryCall<proto_services_user_user_service_pb.CreateUserRequest, proto_services_user_user_service_pb.CreateUserResponse>;
}

export interface IUserServiceClient {
    createUser(request: proto_services_user_user_service_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_services_user_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_services_user_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: proto_services_user_user_service_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_services_user_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_services_user_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
}
