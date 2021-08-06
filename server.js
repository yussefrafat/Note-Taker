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


app.route("/api/notes")

// grab the notes list 
.get(function (req, res){
    res.json(database);
})

// Add a new note to db.json file 

.post(function(req, res) {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
    let newNote = req.body;

    // This allows the test note to be original
    let highestId = 99;
    // this loops through the array to find the highest ID
    for (let i = 0; i < database.length; i++) {
        let individualNote = database[i];

        if (individualNote.id > highestId) {
            //highestId will always be the highest numebered ID in the notesArray.
            highestId = individualNote.id;
        } 
    }
    // This assigns an ID to the newNote.
    newNote.id = highestId + 1;

    // We push it to db.json
    database.push(newNote)

    // Write the db.json file again 
    fs.writeFile(jsonFilePath, JSON.stringify(database), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your note was saved!");
    });
    // Gives back the response, which is the user's new note.
    res.json(newNote);
});


// Delete a note based on an ID (cannot be location in array,
// the location will change if you splice things out)
// This route is dependent on ID of note.
//      1. Find note by id via a loop
//      2. Splice note out of array of notes.
//      3. Re-write db.json, just without that newly deleted note.