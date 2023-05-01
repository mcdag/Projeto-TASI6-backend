// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_user_user_service_pb = require('../../../proto/services/user/user_service_pb.js');

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
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
