import express from "express";
import ReportController from "../controllers/reportController";

const router = express.Router();

const reportController = new ReportController();

router.get("/report", reportController.listAllReports);

export default router;
