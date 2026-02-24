const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username Already Exist"],
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        unique: [true, "Email Already Exist"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/meet00/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg"
    }
});

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;