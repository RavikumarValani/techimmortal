import express from "express";
const router = express.Router();
import checkAuth from "../middleware/check-auth.js";
import { get_stats, update } from "../controllers/stats.js";

router.get("/", get_stats);
router.post("/", checkAuth, update);
router.post("/:id", checkAuth, update);

export default router;
