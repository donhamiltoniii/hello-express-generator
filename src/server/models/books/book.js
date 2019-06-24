const authorSchema = require("../authors/author-schema");
const bookSchema = require("./book-schema");
const mongoose = require("mongoose");

module.exports = mongoose.model("Book", bookSchema);
