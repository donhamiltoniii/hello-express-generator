const Author = require("../authors/author");
const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Book",
  new mongoose.Schema({
    title: String,
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Author" }],
    isbn: String,
    description: String,
    imageUrl: String
  })
);
