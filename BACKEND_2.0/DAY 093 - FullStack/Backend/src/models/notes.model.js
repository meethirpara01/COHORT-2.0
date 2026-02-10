const mongoose = require("mongoose");

const schemaModel = new mongoose.Schema({
    title: String,
    description: String
});

const notemodel = mongoose.model("NOTES", schemaModel);

module.exports = notemodel;