const express = require("express");
const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const authRoute = express.Router();

authRoute.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const isUserExistAlready = await userModel.findOne({ email });

    if (isUserExistAlready) {
        res.status(409).json({
            message: "User Already Exist With This Email"
        }); 
    }

    const hash = crypto.createHash("MD5").update(password).digest("hex");

    const user = await userModel.create({
        username,
        email,
        password: hash
    });

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("JWT_TOKEN", token);

    res.status(201).json({
        message: "User Register Successfully",
        user,
        token
    });
});

authRoute.post("/protected", (req, res) => {
    console.log(req.cookies);

    res.status(200).json({
        message: "This is Protected Routes"
    });
});

authRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        res.status(400).json({
            message: "User Not Exist With This Email"
        })
    }

    const hash = crypto.createHash("MD5").update(password).digest("hex");

    const isPasswordMatched = user.password === hash;

    if (!isPasswordMatched) {
        res.status(400).json({
            message: "Invalid Password"
        });
    }

    const token = jwt.sign({
        id: user._id 
    }, process.env.JWT_SECRET);

    res.cookie("jwt_token", token);

    res.status(201).json({
        message: "User Login Successfully",
        user
    });
});

module.exports = authRoute;