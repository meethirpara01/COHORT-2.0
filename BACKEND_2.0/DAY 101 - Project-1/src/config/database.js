const mongoose = require("mongoose");

async function connecToDB() {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Connected To DB");
}

module.exports = connecToDB;