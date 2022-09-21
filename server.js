const express = require("express");
const path = require("path");
const fs = require("fs");
// Helper method for generating unique ids
const uuid = require("./helpers/uuid");
const notes = require("./db/notes");

const app = express();
const db = require("./db/db.json");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// GET Route for static homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
// GET Route for static notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

// GET request for notes
app.get("/api/notes", (req, res) => {
  console.info(`GET /api/notes`);
  res.status(200).json(db);
});

// // Fetch request to add a new note
// const addNote = (note) => {
//   fetch("/api/notes", {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify(note),
//   });
// };

// POST request to add a note
app.post("/api/notes", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting note");
  }
});

// GET request for a single note
app.get("/api/notes/:note_id", (req, res) => {
  if (req.params.note_id) {
    console.info(`${req.method} request received to get a single a note`);
    const noteId = req.params.note_id;
    for (let i = 0; i < notes.length; i++) {
      const currentNote = notes[i];
      if (currentNote.note_id === noteId) {
        res.json(currentNote);
        return;
      }
    }
    res.status(404).send("Note not found");
  } else {
    res.status(400).send("Note ID not provided");
  }
});

// DELETE request to delete a note
app.delete("/api/notes/:note_id", (req, res) => {
  if (req.body && req.params.note_id) {
    console.info(`${req.method} request received to GET a note`);
    const noteId = req.params.note_id;
    for (let i = 0; i < notes.length; i++) {
      const currentNote = notes[i];
      if (currentNote.note_id === noteId) {
        fetch("/api/notes", {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(db),
        });
        return;
      }
    }
    res.status(404).json("Note ID not found");
  }
});

app.get("*", (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/notes">http://localhost:${PORT}/api/notes</a>`
  )
);

app.listen(PORT, () =>
  console.log(`NoteTaker app listening at http://localhost:${PORT}`)
);
