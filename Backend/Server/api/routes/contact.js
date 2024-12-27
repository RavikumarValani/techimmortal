import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer();
import checkAuth from "../middleware/check-auth.js";
import {
  get_all,
  get_status,
  create,
  updateStatus,
} from "../controllers/contact.js";

router.get("/", get_all);
router.get("/status", get_status);
router.put("/:contactId", checkAuth, updateStatus);
router.post("/", upload.none(), create);

export default router;
