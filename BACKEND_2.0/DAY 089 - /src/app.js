const express = require("express");

const app = express();
// const mongoose = require("mongoose");

// function connectToDB()
// {
//     mongoose.connect("mongodb+srv://ankur:NFYdJcRacYMDSHrO@cluster0.hyskdpp.mongodb.net/day-6")
//     .then(() => {
//         console.log("Connected To DataBase");
//     })
// }
// connectToDB()

app.listen(3000, () => {
    console.log("Server runing at port 3000");
})