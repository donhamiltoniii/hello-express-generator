const mongoose = require('mongoose')

const Book = require('./books/book')

const { username, password } = require('../config/db')

const dbConnection = `mongodb+srv://${username}:${password}@cluster0-ljwdh.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(dbConnection, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Connected to the DB!')
})

const refactoring = new Book({
  title: 'Refactoring',
  author: 'Martin Fowler',
  isbn: '0201485672',
  description: 'Description: Great, amazing book about TDD and refactoring',
  imageUrl:
    'https://images-na.ssl-images-amazon.com/images/I/51K-M5hR8qL._SX392_BO1,204,203,200_.jpg'
})

refactoring.save((error, refactoring) => {
  if (error) return console.error(error)
  console.log(refactoring._title, refactoring._author)
})
