const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username is already exist"],
        require: [true, "Username is required"]
    },
    email: {
        type: String,
        unique: [true, "Email is already exist"],
        require: [true, "Email is required"]
    },
    password: {
        type: String,
        require: [true, "Password is required"]
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/meet00/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg?updatedAt=1771887722491"
    }
});

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;