import { credentials } from "grpc";
import { CreateReportRequestDTO } from "../../../dtos/createReport.dto";
import { ReportServiceClient } from "../../proto/services/report/report_service_grpc_pb";

const client = new ReportServiceClient(
  `localhost:${process.env.REPORT_SERVICE_PORT}`,
  credentials.createInsecure()
);

export class ReportServiceGRPC {
  public createReport(dto: CreateReportRequestDTO): boolean {
    console.log("Creating report");
    client.createReport(dto.toProto(), (error, response) => {
      if (error) {
        console.error(error);

        process.exit(1);
      }
      console.info(response.getCreated());
      return response.getCreated();
    });
    return false;
  }
}
