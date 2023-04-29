import { credentials } from "grpc";
import { ReportServiceClient } from "../proto/services/report/report_service_grpc_pb";
import {
  CreateReportRequest,
  Report,
  ReportType,
} from "../proto/services/report/report_service_pb";

const client = new ReportServiceClient(
  "localhost:4000",
  credentials.createInsecure()
);

const request = new CreateReportRequest();
const report = new Report();

report.setDescription("Mock_description");
report.setTypesList([ReportType.REPORT_TYPE_ASSALTO]);

request.setReport(report);
request.setUserId("asd");

client.createReport(request, (error, response) => {
  if (error) {
    console.error(error);

    process.exit(1);
  }
  console.info(response.getCreated());
});
