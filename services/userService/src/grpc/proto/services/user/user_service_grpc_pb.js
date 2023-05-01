// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_user_user_service_pb = require('../../../proto/services/user/user_service_pb.js');

function serialize_services_user_CreateUserRequest(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type services.user.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_CreateUserRequest(buffer_arg) {
  return proto_services_user_user_service_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_user_CreateUserResponse(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type services.user.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_CreateUserResponse(buffer_arg) {
  return proto_services_user_user_service_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/services.user.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_user_service_pb.CreateUserRequest,
    responseType: proto_services_user_user_service_pb.CreateUserResponse,
    requestSerialize: serialize_services_user_CreateUserRequest,
    requestDeserialize: deserialize_services_user_CreateUserRequest,
    responseSerialize: serialize_services_user_CreateUserResponse,
    responseDeserialize: deserialize_services_user_CreateUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
