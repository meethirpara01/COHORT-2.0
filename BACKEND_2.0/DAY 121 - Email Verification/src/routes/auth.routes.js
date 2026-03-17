import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import { registerValidator } from "../validators/auth.validator.js";

const authRoute = Router();

authRoute.post("/register", registerValidator, register);

export default authRoute;