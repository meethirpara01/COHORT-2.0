import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { body, validationResult } from "express-validator";
import { registerValidator } from "../validator/auth.validator.js";




const authRoute = Router();

authRoute.post("/register", registerValidator, registerUser);


export default authRoute;