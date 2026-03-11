const { Router} = require("express");
const authController = require("../controllers/auth.controller");
const { authUser } = require("../middlewares/auth.middleware");

const authRoute = Router();

authRoute.post("/register", authController.register);

authRoute.post("/login", authController.login);

authRoute.get("/get-me", authUser, authController.getMe);

authRoute.get("/logout", authController.logout);

module.exports = authRoute;