# Note Taker

## Description

An application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.

## Installation

Developers can deploy the entire application to Heroku.
<c>npm install</c>
<c>heroku login</c>
Once authentication is complete type
<c>heroku open</c>

## Usage

With this note-taking application
WHEN a user opens the Note Taker
THEN a user is presented with a landing page with a link to a notes page
WHEN a user clicks on the link to the notes page
THEN a user is presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN a user enters a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN a user clicks on the Save icon
THEN the new note a user has entered is saved and appears in the left-hand column with the other existing notes
WHEN a user clicks on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN a user clicks on the Write icon in the navigation at the top of the page
THEN a user is presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Requirements

Node.js
Express.js
Heroku

## Issues

Currently
WHEN a user enters a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
** BUT **
WHEN a user clicks on the Save icon
THEN the new note a user has entered is saved ** BUT DOES NOT ** appear in the left-hand column with the other existing notes

J. Hollis
