import {
  ServerUnaryCall,
  sendUnaryData,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { dataSource } from "./app-data-source";
import { Report as ReportEntity } from "./data/entities/report.entity";
import { ReportServiceService } from "./grpc/proto/services/report/report_service_grpc_pb";
import {
  CreateReportRequest,
  CreateReportResponse,
  ListAllReportsRequest,
  ListAllReportsResponse,
  Report,
} from "./grpc/proto/services/report/report_service_pb";

import dotenv from "dotenv-safe";

dotenv.config({
  path: ".env",
});

dataSource.initialize().then(() => console.log("Datasource initialized"));

const repository = dataSource.getRepository(ReportEntity);

const convertToEntity = (proto: CreateReportRequest): ReportEntity => {
  const report = new ReportEntity();
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

const listAllReports = async (
  call: ServerUnaryCall<ListAllReportsRequest, ListAllReportsResponse>,
  callback: sendUnaryData<ListAllReportsResponse>
) => {
  try {
    const response = await repository.find().then((reports) => {
      return reports.map((report) =>
        new Report()
          .setAnonymous(report.anonymous)
          .setDescription(report.description)
          .setLatitude(report.latitude)
          .setLongitude(report.longitude)
          .setReportDate(report.report_date)
          .setType(report.type)
      );
    });
    callback(null, new ListAllReportsResponse().setReportsList(response));
  } catch (e) {}
};

var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (error0: any, connection: any) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1: any, channel: any) {
    if (error1) {
      throw error1;
    }

    var queue = "report";

    channel.assertQueue(queue, {
      durable: false,
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(
      queue,
      function (msg: any) {
        const newReport = msg.content;
        console.log(`AQUII`);
        console.log(`${Object.values(newReport)}`);
        repository.save(newReport);
      },
      {
        noAck: true,
      }
    );
  });
});

const server = new Server();

server.addService(ReportServiceService, { createReport, listAllReports });

server.bindAsync("0.0.0.0:4000", ServerCredentials.createInsecure(), () => {
  server.start();

  console.log("server is running on 0.0.0.0:4000");
});
