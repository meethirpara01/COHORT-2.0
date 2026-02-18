const mongoose = require("mongoose");

function connectToDB() {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to Database");
    })
}

module.exports = connectToDB;