const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});


async function postCreationController(req, res) {

    console.log(req.body, req.file);

    const token = req.cookies.JWT_TOKEN;

    if (!token) {
        res.status(409).json({
            message: "Token not provided, Unauthorized access"
        });
    }

    let decoded = null;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).json({
            message: "Use not authorized"
        });
    }

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "INSTACLONE"
    });

    // res.send(file);

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    });

    res.status(201).json({
        message: "Post Created Successfully",
        post
    });
}

module.exports = {
    postCreationController
}