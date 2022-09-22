# Note Taker

## Description

An application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.

## Installation

Developers can deploy the entire application to Heroku.
<c>npm install</c>
<c>heroku login</c>
Once authentication is complete type
<c>heroku open</c>

Deployed app: https://boiling-forest-09998.herokuapp.com/

## Usage

With this note-taking application</br>
WHEN a user opens the Note Taker</br>
THEN a user is presented with a landing page with a link to a notes page</br>
WHEN a user clicks on the link to the notes page</br>
THEN a user is presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column</br>
WHEN a user enters a new note title and the note’s text</br>
THEN a Save icon appears in the navigation at the top of the page</br>
WHEN a user clicks on the Save icon</br>
THEN the new note a user has entered is saved and appears in the left-hand column with the other existing notes</br>
WHEN a user clicks on an existing note in the list in the left-hand column</br>
THEN that note appears in the right-hand column</br>
WHEN a user clicks on the Write icon in the navigation at the top of the page</br>
THEN a user is presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Requirements

Node.js</br>
Express.js</br>
Heroku</br>

## Issues

Currently
WHEN a user enters a new note title and the note’s text</br>
THEN a Save icon appears in the navigation at the top of the page</br>
** BUT **</br>
WHEN a user clicks on the Save icon</br>
THEN the new note a user has entered is saved ** BUT DOES NOT **</br> appear in the left-hand column with the other existing notes

J. Hollis
