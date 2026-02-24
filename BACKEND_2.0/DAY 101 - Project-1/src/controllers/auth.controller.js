const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");


async function registerController(req, res) {
    const { email, username, password, bio, profileImage } = req.body;

    // const isUserExistByEmail = await userModel.findOne({ email });
    // if (isUserExistByEmail) {
    //     res.status(409).json({
    //         message: "User Already Exist With This Email"
    //     });
    // }

    // const isUsernameAlreadyExist = await userModel.findOne({ username });
    // if (isUsernameAlreadyExist) {
    //     res.status(409).json({
    //         message: "User not available"
    //     });
    // }

    const isUserAlreadyExist = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    if (isUserAlreadyExist) {
        res.status(409).json({
            message: "User Already Exist With This " + (isUserAlreadyExist.email == email ? "Email" : "Username")
        });
    }

    const hash = crypto.createHash("MD5").update(password).digest("hex");

    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio,
        profileImage
    });

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("JWT_TOKEN", token);

    res.status(201).json({
        message: "User Register Successfully",
        user: {
            name: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage,
        },
        token
    });
}


async function loginController(req, res) {
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
    });

    if (!user) {
        return res.status(409).json({
            message: "User Not Found"
        });
    }

    const hash = crypto.createHash("MD5").update(password).digest("hex");

    const isPasswordMatched = user.password === hash;

    if (!isPasswordMatched) {
        res.status(409).json({
            message: "Invalid Password"
        });
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("JWT_TOKEN", token);

    res.status(201).json({
        message: 'User Login Successfully',
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage,
        }
    });
}


module.exports = {
    registerController,
    loginController
}