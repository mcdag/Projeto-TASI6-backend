import ReportController from "./controllers/reportController";
import UserController from "./controllers/userController";

const dotenv = require("dotenv-safe");
const express = require("express");
const cors = require("cors");

dotenv.config({
  path: ".env",
});

const PORT = process.env.API_GATEWAY_PORT || 4000;

const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const reportController = new ReportController();
const userController = new UserController();

app
  .route("/report")
  .post(async (req, res): Promise<void> => {
    reportController.createReport(req, res);
  })
  .get(async (req, res) => reportController.listAllReports(req, res));

app.route("/user").post(async (req, res): Promise<void> => {
  userController.signUp(req, res);
});

// app.route("/login").post(async (req, res): Promise<void> => {
//   userController.login(req, res);
// });

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso em ${HOSTNAME}:${PORT}`);
});
