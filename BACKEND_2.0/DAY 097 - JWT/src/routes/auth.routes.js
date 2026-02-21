const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authRouter = express.Router(); // IF YOU WANT TO CREATE API OF SIDE OF app.js THAT YOU NEED TO WRITE THIS express.Router()

authRouter.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email }) ;

    if (isUserAlreadyExist) {
        res.status(400).json({
            message: "User already exist with this email address"
        })
    }

    const user = await userModel.create({
        username,
        email,
        password
    });

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET);

    res.cookie("jwt_token", token);

    res.status(201).json({
        message: "User Registered Successfully",
        user,
        token
    })



})

module.exports = authRouter;