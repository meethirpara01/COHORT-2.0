const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");

async function registerUser(req, res) {

    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    }).select("+password");

    if (isUserAlreadyExist) {
        return res.status(400).json({
            message: "User Already Exist With This " + (isUserAlreadyExist.email ? "Email" : "Username")
        })
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        username,
        email,
        password: hash
    });

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("JWT_TOKEN", token);

    return res.status(201).json({
        message: "User Register Succesfully",
        user: {
            username: user.username,
            email: user.email
        },
        token
    });
}

async function loginUser(req, res) {

    const { username, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            }
        ]
    }).select("+password");

    if (!user) {
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        return res.status(400).json({
            message: "Invalid credentials"
        })
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("JWT_TOKEN", token);

    return res.status(201).json({
        message: "User Login Succesfully",
        user: {
            username: user.username,
            email: user.email
        },
        token
    });
}

async function getMe(req, res) {

    const user = await userModel.findById(req.user.id);

    return res.status(200).json({
        message: "User Fetched Successfully",
        user
    });
}

async function logoutUser(req, res) {

    const token = req.cookies.JWT_TOKEN;    

    res.clearCookie("token");

    await blacklistModel.create({
        token
    });

    res.status(201).json({
        message: "Logout Successfully"
    });
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    logoutUser
}