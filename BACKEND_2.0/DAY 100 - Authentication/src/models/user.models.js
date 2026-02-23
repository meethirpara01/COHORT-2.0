const mongoose = require("mongoose");

const schemaModel = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: [true, "With this email account alresdy exist"]
    },
    password: String
});

const userModel = mongoose.model("USERS", schemaModel);
module.exports = userModel;