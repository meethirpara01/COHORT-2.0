const postModel = require("../models/post.model");
const jwt = require("jsonwebto ken");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const likeModel = require("../models/like.model");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function creatPostController(req, res) {

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder: "INSTACLONE"
    });

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    });

    res.status(201).json({
        message: "Post Created Successfully",
        post
    });
}

async function getpostController(req, res) {

    const userId = req.user.id;
    const posts = await postModel.find({
        user: userId
    });

    res.status(201).json({
        message: "Posts Fetched Successfully",
        posts
    });
}

async function getPostDetailsController(req, res) {

    const userId = req.user.id;
    const postId = req.params.postId;

    const post = await postModel.findById(postId);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    const isUserAuthorized = post.user.toString() === userId.toString();

    if (!isUserAuthorized) {
        return res.status(403).json({
            message: "Use not authorized"
        });
    }

    return res.status(201).json({
        message: "Post Fetched Successfully",
        post
    });
}

async function likePostController(req, res) {

    const username = req.user.username;
    const postId = req.params.postId;

    const post = await postModel.findById(postId);

    if (!post) {
        return res.status(404).json({
            message: "Post not found!"
        });
    }

    const likeRecored = await likeModel.create({
        post: postId,
        user: username
    });

    res.status(201).json({
        message: "You like this post",
        likeRecored
    })
}

module.exports = {
    creatPostController,
    getpostController,
    getPostDetailsController,
    likePostController
}