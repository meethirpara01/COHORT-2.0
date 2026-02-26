const express = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postController = require("../controllers/post.controller");


const postRoute = express.Router();

postRoute.post("/", upload.single("image"), postController.postCreationController);

postRoute.get("/", postController.getPostController);

postRoute.get("/detail/:postId", postController.getPostDetailsController)

module.exports = postRoute;