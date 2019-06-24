const authorSchema = require("../authors/author-schema");
const tagSchema = require("../tags/tag-schema");
const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  title: String,
  authors: [authorSchema],
  isbn: String,
  description: String,
  imageUrl: String,
  tags: [tagSchema]
});
