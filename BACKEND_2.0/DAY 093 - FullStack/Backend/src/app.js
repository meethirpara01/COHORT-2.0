const express = require("express");
const notemodel = require("./models/notes.model");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req, res) => {
    const notes = await notemodel.find();

    res.status(200).json({
        message: "Notes Featch Successfully",
        notes 
    });
});

app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body;
    const note = await notemodel.create({
        title, description
    });

    res.status(201).json({
        message: "Note created Successfully",
        note
    });
});

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id;

    await notemodel.findByIdAndDelete(id);

    res.status(200).json({
        message: "Note deleted successfully",
    });
});

app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    const { description } = req.body;
    const note = await notemodel.findByIdAndUpdate(id, { description });

    res.status(200).json({
        message: "Note updated successfully",
        note
    });
});


module.exports = app;

