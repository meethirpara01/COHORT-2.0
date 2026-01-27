const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.get("/about", (req, res) => {
    res.send("THIS IS ABOUT PAGE");
})

app.listen(3000, () => {
    console.log("Server runing at port 3000");
})