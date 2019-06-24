const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  title: String,
  authors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Author" }],
  isbn: String,
  description: String,
  imageUrl: String,
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }]
});
