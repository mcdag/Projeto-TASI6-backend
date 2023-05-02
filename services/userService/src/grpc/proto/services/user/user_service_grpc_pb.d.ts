// package: services.user
// file: proto/services/user/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_user_user_service_pb from "../../../proto/services/user/user_service_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserServiceService_ICreateUser;
    getUserInfo: IUserServiceService_IGetUserInfo;
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
interface IUserServiceService_IGetUserInfo extends grpc.MethodDefinition<proto_services_user_user_service_pb.GetUserInfoRequest, proto_services_user_user_service_pb.GetUserInfoResponse> {
    path: "/services.user.UserService/GetUserInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_user_user_service_pb.GetUserInfoRequest>;
    requestDeserialize: grpc.deserialize<proto_services_user_user_service_pb.GetUserInfoRequest>;
    responseSerialize: grpc.serialize<proto_services_user_user_service_pb.GetUserInfoResponse>;
    responseDeserialize: grpc.deserialize<proto_services_user_user_service_pb.GetUserInfoResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    createUser: grpc.handleUnaryCall<proto_services_user_user_service_pb.CreateUserRequest, proto_services_user_user_service_pb.CreateUserResponse>;
    getUserInfo: grpc.handleUnaryCall<proto_services_user_user_service_pb.GetUserInfoRequest, proto_services_user_user_service_pb.GetUserInfoResponse>;
}

export interface IUserServiceClient {
    createUser(request: proto_services_user_user_service_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_services_user_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_services_user_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    getUserInfo(request: proto_services_user_user_service_pb.GetUserInfoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.GetUserInfoResponse) => void): grpc.ClientUnaryCall;
    getUserInfo(request: proto_services_user_user_service_pb.GetUserInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.GetUserInfoResponse) => void): grpc.ClientUnaryCall;
    getUserInfo(request: proto_services_user_user_service_pb.GetUserInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.GetUserInfoResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: proto_services_user_user_service_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_services_user_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_services_user_user_service_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.CreateUserResponse) => void): grpc.ClientUnaryCall;
    public getUserInfo(request: proto_services_user_user_service_pb.GetUserInfoRequest, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.GetUserInfoResponse) => void): grpc.ClientUnaryCall;
    public getUserInfo(request: proto_services_user_user_service_pb.GetUserInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.GetUserInfoResponse) => void): grpc.ClientUnaryCall;
    public getUserInfo(request: proto_services_user_user_service_pb.GetUserInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_user_user_service_pb.GetUserInfoResponse) => void): grpc.ClientUnaryCall;
}
