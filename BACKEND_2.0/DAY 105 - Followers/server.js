require("dotenv").config();
const app = require("./src/app");
const connecTODB = require("./src/config/database");

connecTODB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});