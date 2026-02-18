const mongoose = require("mongoose");

const shemaModel = new mongoose.Schema({
    title: String,
    description: String
})

const noteModel = mongoose.model("NOTES", shemaModel);

module.exports = noteModel;