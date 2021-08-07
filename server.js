const express = require("express");
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

notesID = notes.length;

// ROUTES API

app.get("/api/notes", function (req, res) {
    let newNote = req.body;

    newNote["id"] = notesID +1;
    notesID++;
    console.log(newNote);

    notes.push(newNote);

    rewriteNotes();

    return res.status(200).end();
});

app.delete("/api/notes/:id", function (req, res) {
    res.send('Got a DELETE request at /api/notes/:id')

    var id = req.params.id;

    var idLess = notes.filter(function (less) {
        return less.id < id;
    });

    var idGreater = notes.filter(function (greater) {
        return greater.id > id;
    });

    notes = idLess.concat(idGreater);

    rewriteNotes();
})