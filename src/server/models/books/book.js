const authorSchema = require('../authors/author-schema')
const mongoose = require('mongoose')

module.exports = mongoose.model(
  'Book',
  new mongoose.Schema({
    title: String,
    authors: [authorSchema],
    isbn: String,
    description: String,
    imageUrl: String
  })
)
