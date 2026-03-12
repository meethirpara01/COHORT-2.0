const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../model/backlist.model");
const redis = require("../config/cache");

async function register(req, res) {

    const { username, email, password } = req.body;

    const isUserAlredyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    }).select("+password");

    if (isUserAlredyExist) {
        return res.status(400).json({
            message: "User Alredy Exist With This " + (isUserAlredyExist.email ? "Email" : "Username")
        });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        username,
        email,
        password: hash
    });

    const token = jwt.sign({
        id: user._id,
        username: user.username,
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("JWT_TOKEN", token);

    return res.status(201).json({
        message: "User Register Successfully",
        user: {
            username: user.username,
            email: user.email
        },
        token
    });
}

async function login(req, res) {

    const { username, email, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            {
                username: username
            },
            {
                email: email
            },
        ]
    }).select("+password");

    if (!user) {
        return res.status(400).json({
            message: "Invalid Credentials"
        });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
        return res.status(400).json({
            message: "Invalid Credentials"
        });
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username,
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("JWT_TOKEN", token);

    return res.status(200).json({
        message: "User Login Successfully",
        user: {
            username: user.username,
            email: user.email
        },
        token
    });
}

async function getMe (req, res) {

    const user = await userModel.findById(req.user.id);
    
    return res.status(209).json({
        message: "User Fetched Successfully",
        user
    });
}

async function logout (req, res) {

    const token = req.cookies.JWT_TOKEN;

    // await blacklistModel.create({
    //     token
    // });
    await redis.set(token, Date.now().toString(), "EX", 60 * 60);

    res.clearCookie("JWT_TOKEN");

    res.status(200).json({
        message: "Logout Successfully"
    });
}

module.exports = {
    register,
    login,
    getMe,
    logout
}