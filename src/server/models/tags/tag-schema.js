const bookSchema = require("../books/book-schema");
const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  name: String,
  books: [bookSchema]
});
