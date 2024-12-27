import express from "express";
const router = express.Router();
import { user_signup, user_login } from "../controllers/user.js";

router.post("/signup", user_signup);
router.post("/login", user_login);
// router.delete("/:userId", checkAuth, user_delete);

export default router;
