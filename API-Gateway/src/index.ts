import { response } from "express";
import { credentials } from "grpc";
import { CreateReportRequestDTO } from "./dtos/createReport.dto";
import { ReportServiceClient } from "./grpc/proto/services/report/report_service_grpc_pb";
import {
  CreateReportRequest,
  Report,
  ReportType,
} from "./grpc/proto/services/report/report_service_pb";

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

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/report", async (req: any, res: any): Promise<void> => {
  const dto = new CreateReportRequestDTO(req.body);
  const reportRequest = dto.toProto();

  await reportServiceGRPC.createReport(reportRequest, (error, response) => {
    res.send({ created: response.getCreated() });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso em ${HOSTNAME}:${PORT}`);
});
