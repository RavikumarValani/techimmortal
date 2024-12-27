import express from "express";
const router = express.Router();
import { authenticate } from "../controllers/auth.js";
router.post("/", authenticate);
export default router;
