const uuid = require("../helpers/uuid");

const notes = [
  {
    note: "Order additional supplies for off-site retreat",
    note_id: uuid(),
  },
  {
    note: "Schedule call with developer",
    note_id: uuid(),
  },
  {
    note: "Contact Alex to set up a meeting next week",
    note_id: uuid(),
  },
  {
    note: "Call insurance agent to discuss policy",
    note_id: uuid(),
  },
];

module.exports = notes;
