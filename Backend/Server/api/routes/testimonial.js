import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
const router = express.Router();
import checkAuth from "../middleware/check-auth.js";
import {
  get_all,
  create,
  get_one,
  update,
  deleteBlog,
} from "../controllers/testimonial.js";

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

router.post("/", upload.single("image"), create);

router.get("/:testimonialId", get_one);

router.put("/:testimonialId", checkAuth, upload.single("image"), update);

router.delete("/:testimonialId", deleteBlog);

export default router;
