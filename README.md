# Note Taker Starter Code

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed. AS A user, I want to be able to write and save notes. I WANT to be able to delete notes I've written before SO THAT I can organize my thoughts and keep track of tasks I need to complete

The objective of this homework was to create an application that can be used to write, save and delete notes, using express backend and saving and retrieving note data from a JSON file. Fortunately the frontend was already created with an index.html and notes.html and an assets folder containing css and index.js. While the frontend is usually my favorite part to work on, I can see how time-consuming it would be to create the entire application (especially during Thanksgiving break!).

# Instructions/Demos

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.
The application frontend has already been created, it's your job to build the backend and connect the two.

The following HTML routes should be created:

GET /notes - Should return the notes.html file.

GET * - Should return the index.html file

The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

The following API routes should be created:

GET /api/notes - Should read the db.json file and return all saved notes as JSON.

POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

Application should allow users to create and save notes.
Application should allow users to view previously saved notes.
Application should allow users to delete previously saved notes.


# Link Deployed
https://note-taker0812.herokuapp.com/
