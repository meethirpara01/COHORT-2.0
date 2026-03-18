import { Router } from "express";
import { register, login, getMe, verifyEmail, resendVerificationEmail } from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";
import { authUser } from "../middlewares/auth.middleware.js";

const authRoute = Router();

authRoute.post("/register", registerValidator, register);

authRoute.post("/login", loginValidator, login);

authRoute.get("/get-me", authUser, getMe);

authRoute.get("/verify-email", verifyEmail);

authRoute.post("/resend-email", resendVerificationEmail);

export default authRoute;