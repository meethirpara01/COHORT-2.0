const mongoose = require("mongoose");

async function connecToDB() {
    await mongoose.connect(process.env.MONGODB_URL)

    console.log("Connect To DB");
}

module.exports = connecToDB;