const mongoose = require("mongoose");

async function connectToDB () {
    await mongoose.connect(process.env.MONGODB_URL)

    console.log("Connected TO DB");
}

module.exports = connectToDB;