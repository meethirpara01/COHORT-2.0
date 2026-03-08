const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username is Alredy Exist"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email is Alredy Exist"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
});

// userSchema.pre("save", function (next) { })
// userSchema.post("save", function (next) { })

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
