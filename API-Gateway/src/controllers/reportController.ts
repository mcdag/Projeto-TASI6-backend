import { credentials } from "grpc";
import {
  CreateReportRequestDTO,
  CreateReportResponseDTO,
} from "../dtos/createReport.dto";
import { ReportServiceClient } from "../grpc/proto/services/report/report_service_grpc_pb";
import { ListAllReportsRequest } from "../grpc/proto/services/report/report_service_pb";

var amqp = require("amqplib/callback_api");

class ReportController {
  reportServiceGRPC: ReportServiceClient;

  constructor() {
    this.reportServiceGRPC = new ReportServiceClient(
      `localhost:${process.env.REPORT_SERVICE_PORT}`,
      credentials.createInsecure()
    );
  }

  async createReport(req: any, res: any): Promise<void> {
    console.log(`body: ${req.body}`);
    const dto = new CreateReportRequestDTO(req.body);

    console.log(`dto_userId: ${dto.userId}`);
    console.log(`dto_anonymous: ${dto.anonymous}`);
    console.log(`dto_description: ${dto.description}`);
    console.log(`dto_latitude: ${dto.latitude}`);
    console.log(`dto_longitude: ${dto.longitude}`);

    amqp.connect("amqp://localhost", function (error0, connection) {
      if (error0) {
        throw error0;
      }
      connection.createChannel(function (error1, channel) {
        if (error1) {
          throw error1;
        }

        var queue = "report";
        var msg = dto;

        channel.assertQueue(queue, {
          durable: false,
        });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));

        console.log(" [x] Sent %s", msg);
      });
      setTimeout(function () {
        connection.close();
      }, 500);

      res.status(200).send({ created: true });
    });
  }

  async listAllReports(req: any, res: any): Promise<void> {
    this.reportServiceGRPC.listAllReports(
      new ListAllReportsRequest(),
      (error, response) => {
        console.log(error);
        console.log(response);
        res.json({
          reports: response
            .getReportsList()
            .map((report) => CreateReportResponseDTO.fromProto(report)),
        });
      }
    );
  }
}

export default ReportController;
