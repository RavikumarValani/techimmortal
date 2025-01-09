import express from "express";
const router = express.Router();
import checkAuth from "../middleware/check-auth.js";
import { get_all, get_one, create, update, deleteService, getServiceBySorting  } from "../controllers/service.js";

router.get("/", get_all);
router.get("/getBySorting", getServiceBySorting);
router.post("/", checkAuth, create);
router.put("/:id", checkAuth, update);
router.get("/:id", get_one);
router.delete("/:id", deleteService);

export default router;
