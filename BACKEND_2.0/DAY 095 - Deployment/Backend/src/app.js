const express = require("express");
const cors = require("cors");
const noteModel = require("./models/notes.model");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("./public"))

app.get("/api/notes", async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json({
        message: "Notes Fetch successfully",
        notes
    });
});

app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body;
    const note = await noteModel.create({
        title,
        description
    });

    res.status(201).json({
        message: "Note Created Successfully",
        note
    });
});

app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message: "Note Deleted Successfully"
    });
});

app.patch("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    const { description } = req.body;
    const note = await noteModel.findByIdAndUpdate(id, { description });
    res.status(200).json({
        message: "Note Updated Successfully",
        note
    });
});

app.use("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = app;