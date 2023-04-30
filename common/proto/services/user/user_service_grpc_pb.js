// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_user_user_service_pb = require('../../../proto/services/user/user_service_pb.js');

function serialize_services_report_LoginRequest(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.LoginRequest)) {
    throw new Error('Expected argument of type services.report.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_report_LoginRequest(buffer_arg) {
  return proto_services_user_user_service_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_report_LoginResponse(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.LoginResponse)) {
    throw new Error('Expected argument of type services.report.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_report_LoginResponse(buffer_arg) {
  return proto_services_user_user_service_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_report_SignUpRequest(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.SignUpRequest)) {
    throw new Error('Expected argument of type services.report.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_report_SignUpRequest(buffer_arg) {
  return proto_services_user_user_service_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_report_SignUpResponse(arg) {
  if (!(arg instanceof proto_services_user_user_service_pb.SignUpResponse)) {
    throw new Error('Expected argument of type services.report.SignUpResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_report_SignUpResponse(buffer_arg) {
  return proto_services_user_user_service_pb.SignUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  signUp: {
    path: '/services.report.UserService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_user_service_pb.SignUpRequest,
    responseType: proto_services_user_user_service_pb.SignUpResponse,
    requestSerialize: serialize_services_report_SignUpRequest,
    requestDeserialize: deserialize_services_report_SignUpRequest,
    responseSerialize: serialize_services_report_SignUpResponse,
    responseDeserialize: deserialize_services_report_SignUpResponse,
  },
  login: {
    path: '/services.report.UserService/Login',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_user_user_service_pb.LoginRequest,
    responseType: proto_services_user_user_service_pb.LoginResponse,
    requestSerialize: serialize_services_report_LoginRequest,
    requestDeserialize: deserialize_services_report_LoginRequest,
    responseSerialize: serialize_services_report_LoginResponse,
    responseDeserialize: deserialize_services_report_LoginResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
