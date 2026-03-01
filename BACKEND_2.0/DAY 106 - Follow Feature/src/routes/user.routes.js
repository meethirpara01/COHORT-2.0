const express = require("express");
const userController = require("../controllers/user.controller");
const identifyUser = require("../middlewares/auth.middleware");

const userRoute = express.Router();


userRoute.post("/follow/:username", identifyUser, userController.followUserController);

userRoute.post("/unfollow/:username", identifyUser, userController.unFollowUserController);

module.exports = userRoute;