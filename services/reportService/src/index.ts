import {
  ServerUnaryCall,
  sendUnaryData,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { ReportServiceService } from "./grpc/proto/services/report/report_service_grpc_pb";
import {
  CreateReportRequest,
  CreateReportResponse,
} from "./grpc/proto/services/report/report_service_pb";

const createReport = (
  call: ServerUnaryCall<CreateReportRequest, CreateReportResponse>,
  callback: sendUnaryData<CreateReportResponse>
) => {
  const response = new CreateReportResponse();

  if (call.request.getReport()?.getTypesList().length == 0) {
    response.setCreated(false);
  } else {
    response.setCreated(true);
  }
  console.log(`${response.getCreated()}`);
  callback(null, response);
};

const server = new Server();

server.addService(ReportServiceService, { createReport });

server.bindAsync("0.0.0.0:4000", ServerCredentials.createInsecure(), () => {
  server.start();

  console.log("server is running on 0.0.0.0:4000");
});
