import { Router } from "express";
import passport from "passport";
import { getUserProfile } from "../controllers/userController.js";

const router = Router();

router.get("/profile", getUserProfile);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

export default router;
