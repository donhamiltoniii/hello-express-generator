const Book = require('../models/books/book')

class BookController {
  static renderBooks(req, res, next) {
    res.render('books', { books })
  }

  static renderBook(req, res, next) {
    const id = req.params.id
    res.render('book', { book })
  }

  static addBook(req, res, next) {
    const id = req.body.id
    const title = req.body.title
    const author = req.body.author
    const isbn = req.body.isbn
    const description = req.body.description
    const imageUrl = req.body.imageUrl

    data.addBook(new Book(id, title, author, isbn, description, imageUrl))

    res.redirect('/books')
  }
}

module.exports = BookController
