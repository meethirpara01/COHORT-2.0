const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: [ true, "With This Email User Account Already Exists" ],
    },
    password: String,
});

const userModel = mongoose.model("USERS", userSchema);
module.exports = userModel;