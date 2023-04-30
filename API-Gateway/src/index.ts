import { credentials } from "grpc";
import {
  CreateReportRequestDTO,
  CreateReportResponseDTO,
} from "./dtos/createReport.dto";
import { SignUpRequestDTO } from "./dtos/signup.dto";
import { UserServiceGRPC } from "./grpc/clients/userService";
import { ReportServiceClient } from "./grpc/proto/services/report/report_service_grpc_pb";
import { ListAllReportsRequest } from "./grpc/proto/services/report/report_service_pb";
import { UserServiceClient } from "./grpc/proto/services/user/user_service_grpc_pb";
import { SignUpRequest } from "./grpc/proto/services/user/user_service_pb";

const dotenv = require("dotenv-safe");
const express = require("express");
const cors = require("cors");

dotenv.config({
  path: ".env",
});

const PORT = process.env.API_GATEWAY_PORT || 4000;

const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const reportServiceGRPC = new ReportServiceClient(
  `localhost:${process.env.REPORT_SERVICE_PORT}`,
  credentials.createInsecure()
);

const userServiceGRPC = new UserServiceClient(
  `localhost:${process.env.USER_SERVICE_PORT}`,
  credentials.createInsecure()
);

const app = express();
var amqp = require("amqplib/callback_api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/report", async (req, res): Promise<void> => {
  console.log(`body: ${req.body}`);
  const dto = new CreateReportRequestDTO(req.body);
  const reportRequest = dto.toProto();

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
      channel.sendToQueue(queue, Buffer.from(msg.toString()));

      console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () {
      connection.close();
    }, 500);
  });

  // reportServiceGRPC.createReport(reportRequest, (error, response) => {
  //   res.send({ created: response.getCreated() });
  // });

  res.status(200).send({ created: true });
});

app.get("/report", async (req, res): Promise<void> => {
  reportServiceGRPC.listAllReports(
    new ListAllReportsRequest(),
    (error, response) => {
      console.log(response);
      res.json({
        reports: response
          .getReportsList()
          .map((report) => CreateReportResponseDTO.fromProto(report)),
      });
    }
  );
});

app.post("/user", async (req, res): Promise<void> => {
  const dto = new SignUpRequestDTO(req.body);

  const signUpRequest = dto.toProto();

  userServiceGRPC.signUp(signUpRequest, (error, response) => {
    res.send({ created: response.getCreated() });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso em ${HOSTNAME}:${PORT}`);
});
