const mongoose = require('mongoose')

module.exports = () => {
  const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: String,
    description: String,
    imageUrl: String
  })

  return mongoose.model('Book', BookSchema)
}
