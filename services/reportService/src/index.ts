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

import dotenv from "dotenv-safe";

dotenv.config({
  path: ".env",
});

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

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0: any, connection: any) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1: any, channel: any) {
        if (error1) {
            throw error1;
        }

        var queue = 'report';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg: any) {
            const newReport = msg.content;
            console.log(`${newReport}`);
            repository.save(newReport);
        }, {
            noAck: true
        });
    });
});

const server = new Server();

server.addService(ReportServiceService, { createReport });

server.bindAsync("0.0.0.0:4000", ServerCredentials.createInsecure(), () => {
  server.start();

  console.log("server is running on 0.0.0.0:4000");
});
