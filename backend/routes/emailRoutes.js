import { Router } from "express";
import { sendEmail, getCommunicationHistory } from "../controllers/emailController.js";

const router = Router();

router.post("/send", sendEmail);
router.get("/history", getCommunicationHistory);

export default router;
