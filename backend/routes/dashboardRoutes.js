import express from "express";
import { getDashboardSummary } from "../controllers/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js";
