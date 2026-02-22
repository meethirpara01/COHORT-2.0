const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const authRoute = express.Router();

authRoute.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
        res.status(409).json({
            message: "User Already Exist with this Email",
        });
    }

    const hash = crypto.createHash("MD5").update(password).digest("hex");
    
    const user = await userModel.create({
        username,
        email,
        password: hash
    });

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET);

    res.cookie("JWT_TOKEN", token);

    res.status(201).json({
        message: "User Register Successfully",
        user,
        token
    });
})

authRoute.post("/protected", (req, res) => {
    console.log(req.cookies);

    res.status(200).json({
        message: "This is a Protecrted Routes"
    });
})

authRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        res.status(404).json({
            message: "User Not Found With This Email Address"
        });
    }

    const hash = crypto.createHash("MD5").update(password).digest("hex");
    const isPasswordMatched = user.password === hash;

    if (!isPasswordMatched) {
        res.status(401).json({
            message: "Invalid Password"
        });
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("jwt_token", token);

    res.status(200).json({
        message: "User Login Successfully",
        user,
        token
    });
})

module.exports = authRoute;