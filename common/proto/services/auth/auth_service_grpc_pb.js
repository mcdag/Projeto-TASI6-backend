// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_auth_auth_service_pb = require('../../../proto/services/auth/auth_service_pb.js');

function serialize_services_auth_LoginRequest(arg) {
  if (!(arg instanceof proto_services_auth_auth_service_pb.LoginRequest)) {
    throw new Error('Expected argument of type services.auth.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_LoginRequest(buffer_arg) {
  return proto_services_auth_auth_service_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_auth_LoginResponse(arg) {
  if (!(arg instanceof proto_services_auth_auth_service_pb.LoginResponse)) {
    throw new Error('Expected argument of type services.auth.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_LoginResponse(buffer_arg) {
  return proto_services_auth_auth_service_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_auth_SignUpRequest(arg) {
  if (!(arg instanceof proto_services_auth_auth_service_pb.SignUpRequest)) {
    throw new Error('Expected argument of type services.auth.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_SignUpRequest(buffer_arg) {
  return proto_services_auth_auth_service_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_auth_SignUpResponse(arg) {
  if (!(arg instanceof proto_services_auth_auth_service_pb.SignUpResponse)) {
    throw new Error('Expected argument of type services.auth.SignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_auth_SignUpResponse(buffer_arg) {
  return proto_services_auth_auth_service_pb.SignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  signUp: {
    path: '/services.auth.AuthService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_auth_auth_service_pb.SignUpRequest,
    responseType: proto_services_auth_auth_service_pb.SignUpResponse,
    requestSerialize: serialize_services_auth_SignUpRequest,
    requestDeserialize: deserialize_services_auth_SignUpRequest,
    responseSerialize: serialize_services_auth_SignUpResponse,
    responseDeserialize: deserialize_services_auth_SignUpResponse,
  },
  login: {
    path: '/services.auth.AuthService/Login',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_auth_auth_service_pb.LoginRequest,
    responseType: proto_services_auth_auth_service_pb.LoginResponse,
    requestSerialize: serialize_services_auth_LoginRequest,
    requestDeserialize: deserialize_services_auth_LoginRequest,
    responseSerialize: serialize_services_auth_LoginResponse,
    responseDeserialize: deserialize_services_auth_LoginResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
