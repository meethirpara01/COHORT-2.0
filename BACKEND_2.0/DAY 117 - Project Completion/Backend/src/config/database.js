const mongoose = require("mongoose");

async function connectTODB() {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("ConnectedTODB");
};

module.exports = connectTODB;