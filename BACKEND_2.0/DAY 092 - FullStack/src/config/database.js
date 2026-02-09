const mongoose = require("mongoose");

function connectToDB() {
    mongoose.connect("mongodb+srv://meet-cohort:neIOULbSyWen6Zep@cluster0.y7euwup.mongodb.net/NOTES")
    .then(() => {
        console.log("Connected to Database");
    })
}

module.exports = connectToDB;