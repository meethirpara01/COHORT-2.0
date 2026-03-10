const mongoose = require("mongoose");

async function connectedTODB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)

        console.log("Connected To DB");
    } catch (error) {
        console.error("Database connection faild:", error.message);
        process.exit(1); // STOP THE SERVER IF DB IS NOT CONNECT
    }
}

module.exports = connectedTODB;