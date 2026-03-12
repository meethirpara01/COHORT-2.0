require("dotenv").config();
const app = require("./src/app");
const connectTODB = require("./src/config/database");

connectTODB();

app.listen(3000, (req, res) => {
    console.log("Server is Running on port 3000");
});