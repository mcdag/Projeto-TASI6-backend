// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_report_report_service_pb = require('../../../proto/services/report/report_service_pb.js');

function serialize_services_report_ListAllReportsRequest(arg) {
  if (!(arg instanceof proto_services_report_report_service_pb.ListAllReportsRequest)) {
    throw new Error('Expected argument of type services.report.ListAllReportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_report_ListAllReportsRequest(buffer_arg) {
  return proto_services_report_report_service_pb.ListAllReportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_report_ListAllReportsResponse(arg) {
  if (!(arg instanceof proto_services_report_report_service_pb.ListAllReportsResponse)) {
    throw new Error('Expected argument of type services.report.ListAllReportsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_report_ListAllReportsResponse(buffer_arg) {
  return proto_services_report_report_service_pb.ListAllReportsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ReportServiceService = exports.ReportServiceService = {
  listAllReports: {
    path: '/services.report.ReportService/ListAllReports',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_report_report_service_pb.ListAllReportsRequest,
    responseType: proto_services_report_report_service_pb.ListAllReportsResponse,
    requestSerialize: serialize_services_report_ListAllReportsRequest,
    requestDeserialize: deserialize_services_report_ListAllReportsRequest,
    responseSerialize: serialize_services_report_ListAllReportsResponse,
    responseDeserialize: deserialize_services_report_ListAllReportsResponse,
  },
};

exports.ReportServiceClient = grpc.makeGenericClientConstructor(ReportServiceService);
