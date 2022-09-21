const express = require("express");
const path = require("path");
const fs = require("fs");
// Helper method for generating unique ids
const uuid = require("./helpers/uuid");

const app = express();
const db = require("./db.json");
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// GET Route for static homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

// GET route for all the notes
app.get("/api/notes", (req, res) => res.json(db));

// Fetch request to add a new note
const addNote = (note) => {
  fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
};

// POST route to add a single note
app.post("api/notes", (req, res) => {
  const newNote = req.body;
  writeToFile(destination, newNote);

  res.json(` ${req.method} received`);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
