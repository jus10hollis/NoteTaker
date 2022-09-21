const uuid = require("../helpers/uuid");

const notes = [
  {
    title: "Supplies",
    text: "Order additional supplies for off-site retreat",
    note_id: uuid(),
  },
  {
    title: "Developer",
    text: "Schedule call with developer",
    note_id: uuid(),
  },
  {
    title: "Meeting",
    text: "Contact Alex to set up a meeting next week",
    note_id: uuid(),
  },
  {
    title: "Insurance",
    text: "Call insurance agent to discuss policy",
    note_id: uuid(),
  },
];

module.exports = notes;
