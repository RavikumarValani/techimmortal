import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";
import fs from "fs";
import checkAuth from "../middleware/check-auth.js";
import {
  get_all,
  get_blogs_name,
  create,
  get_one,
  update,
  deleteBlog,
} from "../controllers/blog.js";

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

router.get("/blogName", get_blogs_name);

router.post("/", checkAuth, upload.single("image"), create);

router.get("/:blogId", get_one);

router.put("/:blogId", checkAuth, upload.single("image"), update);

router.delete("/:blogId", deleteBlog);

export default router;
