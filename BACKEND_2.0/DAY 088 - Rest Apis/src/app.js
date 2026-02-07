// CREATE THE SERVER AND WRITE THE CONFIG FOR THAT 
const express = require("express");

const app = express();
// OUR EXPRESS BYDEFAULT CAN NOT READ THE DATA IN req.body FOR THAT USE
app.use(express.json());


const notes = [{
    title: "test title 1",
    description: "test description 1" 
}]

app.get("/notes", (req, res) => {
    console.log("Hello Word");
    // res.status(200).json({
    //     notes
    // })
    
    res.status(200).send(notes)
})

app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.send("note created");

    console.log(notes);
})

app.delete("/notes/:index", (req, res) => {
    const param = req.params.index;
    console.log(req.params);
    console.log(req.params.index);

    delete notes[ param ]; // IN BACKEND WE DON'T DELETE ANYTHHING PERMENTLY WE REPLACE WITH NULL
    // notes.splice(param, 1);
    res.send("note deleted succesfully")
})


app.patch("/notes/:index", (req, res) => {
    const param = req.params.index;

    notes[param].description = req.body.description;
    res.send("note updeted succesfully")
})

module.exports = app;
