const express = require("express");
const noteModel = require("./models/notes.model");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));


app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message: "Notes fetch Successfully",
        notes
    });
});

app.post("/api/notes", async (req, res) => {

    const { title, description } = req.body;

    const note = await noteModel.create({
        title,
        description
    });

    res.status(200).json({
        message: "Note created Successfully",
        note
    });
});

app.delete("/api/notes/:id", async (req, res) => {

    const id = req.params.id;

    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message: "Note deleted Successfully",
    });
});

app.patch("/api/notes/:id", async (req, res) => {

    const id = req.params.id;
    const { description } = req.body;

    const note = await noteModel.findByIdAndUpdate(id, { description });

    res.status(200).json({
        message: "Note updated Successfully",
        note
    });
});

app.use("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;