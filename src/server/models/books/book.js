const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Book",
  new mongoose.Schema({
    title: String,
    author: String,
    isbn: String,
    description: String,
    imageUrl: String
  })
);
