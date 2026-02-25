require("dotenv").config();
const app = require("./src/app");
const connecToDB = require("./src/config/databse");

connecToDB();

app.listen(3000, () => {
    console.log("Server is running onport 3000");
});