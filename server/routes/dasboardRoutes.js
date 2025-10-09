import express from "express";
import { Update } from "../controllers/dashboardController.js";

const dashboardRouter = express.Router();

dashboardRouter.post("/update", Update);

export default dashboardRouter;
