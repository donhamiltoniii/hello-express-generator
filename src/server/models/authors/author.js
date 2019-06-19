const mongoose = require('mongoose')

const authorSchema = require('./author-schema')

module.exports = mongoose.model('Author', authorSchema)
