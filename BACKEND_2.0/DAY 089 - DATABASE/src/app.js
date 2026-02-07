const express = require("express");

const app = express();
app.use(express.json());

const notes = [
    {
        title: "test-title",
        description: "test-description"
    }
]

app.get("/notes", (req, res) => {
    res.status(200).json({
        notes: notes
    });
})

app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: "note created succesfully",
    })
})

app.delete("/notes/:index", (req, res) => {
    const param = req.params.index;
    delete notes[param];
    res.status(204).json({
        message: "note deleted succesfully",
    })
})

app.patch("/notes/:index", (req, res) => {
    const param = req.params.index;
    notes[param].description = req.body.description
    res.status(200).json({
        message: "note deleted succesfully",
    })
})

module.exports = app;
