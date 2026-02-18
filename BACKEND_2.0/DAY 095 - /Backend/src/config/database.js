const mongoose = require("mongoose");

function connectToDB() {
    mongoose.connect("mongodb+srv://meet-cohort:kiae5YxRL0iGU98I@cluster0.y7euwup.mongodb.net/")
    .then(() => {
        console.log("Connected to Database");
    })
}

module.exports = connectToDB;