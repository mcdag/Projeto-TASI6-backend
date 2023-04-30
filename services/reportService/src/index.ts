import {
  ServerUnaryCall,
  sendUnaryData,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { dataSource } from "./app-data-source";
import { Report } from "./data/entities/report.entity";
import { ReportServiceService } from "./grpc/proto/services/report/report_service_grpc_pb";
import {
  CreateReportRequest,
  CreateReportResponse,
} from "./grpc/proto/services/report/report_service_pb";

dataSource.initialize().then(() => console.log("Datasource initialized"));

const repository = dataSource.getRepository(Report);

const convertToEntity = (proto: CreateReportRequest): Report => {
  const report = new Report();
  report.anonymous = proto.getReport()?.getAnonymous() ?? false;
  report.description = proto.getReport()?.getDescription() ?? "";
  report.latitude = proto.getReport()?.getLatitude() ?? 0;
  report.longitude = proto.getReport()?.getLongitude() ?? 0;
  report.report_date = new Date().toISOString();
  report.type = proto.getReport()?.getType() ?? "";
  report.user_id = proto.getUserId();

  return report;
};

const createReport = (
  call: ServerUnaryCall<CreateReportRequest, CreateReportResponse>,
  callback: sendUnaryData<CreateReportResponse>
) => {
  try {
    console.log(`request report: ${call.request.getReport()}`);
    const req = call.request;
    const report = convertToEntity(req);

    repository.save(report);
    callback(null, new CreateReportResponse().setCreated(true));
  } catch (e) {
    console.log(e);
    callback(null, new CreateReportResponse().setCreated(false));
  }
};

const server = new Server();

server.addService(ReportServiceService, { createReport });

server.bindAsync("0.0.0.0:4000", ServerCredentials.createInsecure(), () => {
  server.start();

  console.log("server is running on 0.0.0.0:4000");
});
