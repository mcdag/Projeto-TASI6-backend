// package: services.report
// file: proto/services/report/report_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_services_report_report_service_pb from "../../../proto/services/report/report_service_pb";

interface IReportServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createReport: IReportServiceService_ICreateReport;
    listAllReports: IReportServiceService_IListAllReports;
}

interface IReportServiceService_ICreateReport extends grpc.MethodDefinition<proto_services_report_report_service_pb.CreateReportRequest, proto_services_report_report_service_pb.CreateReportResponse> {
    path: "/services.report.ReportService/CreateReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_report_report_service_pb.CreateReportRequest>;
    requestDeserialize: grpc.deserialize<proto_services_report_report_service_pb.CreateReportRequest>;
    responseSerialize: grpc.serialize<proto_services_report_report_service_pb.CreateReportResponse>;
    responseDeserialize: grpc.deserialize<proto_services_report_report_service_pb.CreateReportResponse>;
}
interface IReportServiceService_IListAllReports extends grpc.MethodDefinition<proto_services_report_report_service_pb.ListAllReportsRequest, proto_services_report_report_service_pb.ListAllReportsResponse> {
    path: "/services.report.ReportService/ListAllReports";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_services_report_report_service_pb.ListAllReportsRequest>;
    requestDeserialize: grpc.deserialize<proto_services_report_report_service_pb.ListAllReportsRequest>;
    responseSerialize: grpc.serialize<proto_services_report_report_service_pb.ListAllReportsResponse>;
    responseDeserialize: grpc.deserialize<proto_services_report_report_service_pb.ListAllReportsResponse>;
}

export const ReportServiceService: IReportServiceService;

export interface IReportServiceServer {
    createReport: grpc.handleUnaryCall<proto_services_report_report_service_pb.CreateReportRequest, proto_services_report_report_service_pb.CreateReportResponse>;
    listAllReports: grpc.handleUnaryCall<proto_services_report_report_service_pb.ListAllReportsRequest, proto_services_report_report_service_pb.ListAllReportsResponse>;
}

export interface IReportServiceClient {
    createReport(request: proto_services_report_report_service_pb.CreateReportRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.CreateReportResponse) => void): grpc.ClientUnaryCall;
    createReport(request: proto_services_report_report_service_pb.CreateReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.CreateReportResponse) => void): grpc.ClientUnaryCall;
    createReport(request: proto_services_report_report_service_pb.CreateReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.CreateReportResponse) => void): grpc.ClientUnaryCall;
    listAllReports(request: proto_services_report_report_service_pb.ListAllReportsRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.ListAllReportsResponse) => void): grpc.ClientUnaryCall;
    listAllReports(request: proto_services_report_report_service_pb.ListAllReportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.ListAllReportsResponse) => void): grpc.ClientUnaryCall;
    listAllReports(request: proto_services_report_report_service_pb.ListAllReportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.ListAllReportsResponse) => void): grpc.ClientUnaryCall;
}

export class ReportServiceClient extends grpc.Client implements IReportServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createReport(request: proto_services_report_report_service_pb.CreateReportRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.CreateReportResponse) => void): grpc.ClientUnaryCall;
    public createReport(request: proto_services_report_report_service_pb.CreateReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.CreateReportResponse) => void): grpc.ClientUnaryCall;
    public createReport(request: proto_services_report_report_service_pb.CreateReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.CreateReportResponse) => void): grpc.ClientUnaryCall;
    public listAllReports(request: proto_services_report_report_service_pb.ListAllReportsRequest, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.ListAllReportsResponse) => void): grpc.ClientUnaryCall;
    public listAllReports(request: proto_services_report_report_service_pb.ListAllReportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.ListAllReportsResponse) => void): grpc.ClientUnaryCall;
    public listAllReports(request: proto_services_report_report_service_pb.ListAllReportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_services_report_report_service_pb.ListAllReportsResponse) => void): grpc.ClientUnaryCall;
}
