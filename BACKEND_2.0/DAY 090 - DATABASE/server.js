// START THE SERVER AND CONNECT WITH DATABASE
const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDB() {
    mongoose.connect("")
    .then(() => {
        console.log("Connected to Database");
    })
}

connectToDB();


app.listen(3000, () => {
    console.log("Server is runing on port 3000");
})