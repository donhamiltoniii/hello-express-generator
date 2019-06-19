const Book = require("../books/book");
const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Author",
  new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }]
  })
);
