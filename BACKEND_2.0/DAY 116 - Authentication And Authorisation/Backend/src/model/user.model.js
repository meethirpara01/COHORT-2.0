const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username alredy exist"],
        required: [true, "Username is requird"]
    },
    email: {
        type: String,
        unique: [true, "Email alredy exist"],
        required: [true, "Email is requird"]
    },
    password: {
        type: String,
        required: [true, "Password is requird"],
        select: false
    },
});

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;