const express = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postController = require("../controllers/post.controller");


const postRoute = express.Router();

postRoute.post("/", upload.single("image"), postController.postCreationController);

module.exports = postRoute;