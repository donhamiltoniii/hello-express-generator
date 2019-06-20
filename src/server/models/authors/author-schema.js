const mongoose = require("mongoose");
const bookSchema = require("../books/book-schema");

module.exports = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  books: [bookSchema]
});
