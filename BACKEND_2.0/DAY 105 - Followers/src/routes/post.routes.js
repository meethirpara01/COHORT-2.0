const express = require("express");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postController = require("../controllers/post.controller");
const identifyUser = require("../middlewares/auth.middleware");

const postroute = express.Router();


postroute.post("/", upload.single("image"), identifyUser, postController.creatPostController);

postroute.get("/", identifyUser, postController.getpostController);

postroute.get("/detail/:postId", identifyUser, postController.getPostDetailsController);

module.exports = postroute;