// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_services_report_report_service_pb = require('../../../proto/services/report/report_service_pb.js');

function serialize_services_report_CreateReportRequest(arg) {
  if (!(arg instanceof proto_services_report_report_service_pb.CreateReportRequest)) {
    throw new Error('Expected argument of type services.report.CreateReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_report_CreateReportRequest(buffer_arg) {
  return proto_services_report_report_service_pb.CreateReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_report_CreateReportResponse(arg) {
  if (!(arg instanceof proto_services_report_report_service_pb.CreateReportResponse)) {
    throw new Error('Expected argument of type services.report.CreateReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_report_CreateReportResponse(buffer_arg) {
  return proto_services_report_report_service_pb.CreateReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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
  createReport: {
    path: '/services.report.ReportService/CreateReport',
    requestStream: false,
    responseStream: false,
    requestType: proto_services_report_report_service_pb.CreateReportRequest,
    responseType: proto_services_report_report_service_pb.CreateReportResponse,
    requestSerialize: serialize_services_report_CreateReportRequest,
    requestDeserialize: deserialize_services_report_CreateReportRequest,
    responseSerialize: serialize_services_report_CreateReportResponse,
    responseDeserialize: deserialize_services_report_CreateReportResponse,
  },
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
