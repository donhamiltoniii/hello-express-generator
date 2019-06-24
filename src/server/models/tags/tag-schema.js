const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  name: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }]
});
