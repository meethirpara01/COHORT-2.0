require("dotenv").config();
const app = require("./src/app");
const connectedTODB = require("./src/config/database");

connectedTODB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});