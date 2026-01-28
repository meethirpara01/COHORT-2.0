// const app = require('./src/app');
const mongoose = require("mongoose");

function connectToDB()
{
    mongoose.connect("mongodb+srv://Meet_Hirpara_:GGGo2Lxrcrcn8h7h@cluster0.obsonj8.mongodb.net/day-6")
    .then(() => {
        console.log("Connected To DataBase");
    })
}
connectToDB()

const express = require("express");

const app = express();
app.listen(3000, () => {
    console.log("Server runing at port 3000");
})