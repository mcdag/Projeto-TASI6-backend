import { credentials } from "grpc";
import { CreateReportRequestDTO } from "./dtos/createReport.dto";
import { SignUpRequestDTO } from "./dtos/signup.dto";
import { UserServiceGRPC } from "./grpc/clients/userService";
import { ReportServiceClient } from "./grpc/proto/services/report/report_service_grpc_pb";
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

  reportServiceGRPC.createReport(reportRequest, (error, response) => {
    res.send({ created: response.getCreated() });
  });
});

app.get("/report", async (req, res): Promise<void> => {
  const reports = [];
  res.json(reports);
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
