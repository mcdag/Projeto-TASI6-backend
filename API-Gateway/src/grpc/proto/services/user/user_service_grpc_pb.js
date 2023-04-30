// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_user_user_service_pb = require('../../../proto/services/user/user_service_pb.js');

function serialize_services_user_LoginRequest(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.LoginRequest)) {
    throw new Error('Expected argument of type services.user.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_LoginRequest(buffer_arg) {
  return proto_services_user_user_service_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_user_LoginResponse(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.LoginResponse)) {
    throw new Error('Expected argument of type services.user.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_LoginResponse(buffer_arg) {
  return proto_services_user_user_service_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_user_SignUpRequest(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.SignUpRequest)) {
    throw new Error('Expected argument of type services.user.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_SignUpRequest(buffer_arg) {
  return proto_services_user_user_service_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_user_SignUpResponse(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.SignUpResponse)) {
    throw new Error('Expected argument of type services.user.SignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_user_SignUpResponse(buffer_arg) {
  return proto_services_user_user_service_pb.SignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  signUp: {
    path: '/services.user.UserService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_user_service_pb.SignUpRequest,
    responseType: proto_services_user_user_service_pb.SignUpResponse,
    requestSerialize: serialize_services_user_SignUpRequest,
    requestDeserialize: deserialize_services_user_SignUpRequest,
    responseSerialize: serialize_services_user_SignUpResponse,
    responseDeserialize: deserialize_services_user_SignUpResponse,
  },
  login: {
    path: '/services.user.UserService/Login',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_user_service_pb.LoginRequest,
    responseType: proto_services_user_user_service_pb.LoginResponse,
    requestSerialize: serialize_services_user_LoginRequest,
    requestDeserialize: deserialize_services_user_LoginRequest,
    responseSerialize: serialize_services_user_LoginResponse,
    responseDeserialize: deserialize_services_user_LoginResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
