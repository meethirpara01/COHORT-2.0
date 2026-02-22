const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: [true, "With this email account already exists"]
    },
    password: String
});

const userModel = mongoose.model("USER", userSchema);

module.exports = userModel;