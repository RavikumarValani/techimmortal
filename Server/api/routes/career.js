import express from "express";
const router = express.Router();
import checkAuth from "../middleware/check-auth.js";
import {
    get_all,
    create,
    get_one,
    update,
    deleteCareer,
  } from "../controllers/career.js";

router.get("/", get_all);

router.post("/", checkAuth, create);

router.get("/:careerId", get_one);

router.put("/:careerId", checkAuth, update);

router.delete("/:careerId", deleteCareer);

export default router;
