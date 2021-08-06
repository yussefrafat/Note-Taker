const fs = require('fs');
const path = require('path');
const express = require('express');
const database = require("./db/db.json")


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"./public/index.html"));
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

