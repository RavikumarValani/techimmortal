import express from "express";
const router = express.Router();
import checkAuth from "../middleware/check-auth.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
    get_all,
    create,
    get_one,
    update,
    deleteCareer,
    job_rquest,
    get_all_job_request,
    delete_job_request,
    updateStatus,
    get_job_count,
  } from "../controllers/career.js";

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), "uploads");
    fs.mkdir(uploadDir, { recursive: true }, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null, uploadDir);
    });
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname.replace(
      /\s+/g,
      "_"
    )}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });

router.get("/", get_all);

router.post("/", checkAuth, create);

router.get("/:careerId", get_one);

router.put("/:careerId", checkAuth, update);

router.delete("/:careerId", deleteCareer);

router.post("/job-request",upload.single("myFile"), job_rquest);

router.get("/job/all", get_all_job_request);

router.delete("/job/:id", delete_job_request);

router.put("/job/:id", checkAuth, updateStatus);

router.get("/job/count", get_job_count);

export default router;
