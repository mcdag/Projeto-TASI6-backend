import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { dataSource } from "./app-data-source";
import { Report as ReportEntity } from "./data/entities/report.entity";
import { ReportServiceService } from "./grpc/proto/services/report/report_service_grpc_pb";
import {
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
        const newReport = JSON.parse(msg.content);
        const report = {
          user_id: newReport.userId,
          anonymous: newReport.anonymous,
          description: newReport.description,
          latitude: newReport.latitude,
          longitude: newReport.longitude,
          report_date: new Date().toString(),
          type: newReport.type,
        };
        console.log(" [x] Received %s", report);
        repository.save(report);
      },
      {
        noAck: true,
      }
    );
  });
});
const listAllReports = async (
  call: ServerUnaryCall<ListAllReportsRequest, ListAllReportsResponse>,
  callback: sendUnaryData<ListAllReportsResponse>
) => {
  try {
    const response = await repository.find().then((reports) => {
      console.log(reports);
      return reports.map((report) =>
        new Report()
          .setAnonymous(report.anonymous)
          .setDescription(report.description)
          .setLatitude(report.latitude)
          .setLongitude(report.longitude)
          .setReportDate(report.report_date)
          .setType(report.type)
          .setUserId(report.user_id ?? "")
      );
    });
    console.log(`response: ${response}`);
    callback(null, new ListAllReportsResponse().setReportsList(response));
  } catch (e) {}
};

const server = new Server();

server.addService(ReportServiceService, { listAllReports });

server.bindAsync("0.0.0.0:4000", ServerCredentials.createInsecure(), () => {
  server.start();

  console.log("server is running on 0.0.0.0:4000");
});
