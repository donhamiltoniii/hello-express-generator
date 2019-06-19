const authorSchema = require('../authors/author-schema')
const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  title: String,
  authors: [authorSchema],
  isbn: String,
  description: String,
  imageUrl: String
})
