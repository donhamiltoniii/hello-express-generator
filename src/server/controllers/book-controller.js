const Book = require('../models/books/book')
const Author = require('../models/authors/author')
const Tag = require('../models/tags/tag')

class BookController {
  static renderBooks(req, res, next) {
    Book.find({}, (err, books) => {
      Author.find({}, (err, authors) => {
        Tag.find({}, (err, tags) => {
          res.render('books', { authors, books, tags })
        })
      })
    })
  }

  static renderBook(req, res, next) {
    const id = req.params.id
    var query = Book.where({ _id: id })
    query
      .findOne()
      .populate(['authors', 'tags'])
      .exec((err, book) => {
        if (err) return console.error(err)
        if (book) {
          console.log(book)
          res.render('book', { book })
        }
      })
  }

  static addBook(req, res, next) {
    const title = req.body.title
    const authorId = req.body.authorId
    const isbn = req.body.isbn
    const description = req.body.description
    const tags = req.body.tags
    const imageUrl = req.body.imageUrl

    const bookToAdd = new Book({
      title,
      isbn,
      description,
      imageUrl
    })

    Tag.find({ _id: tags }, (err, tags) => {
      Author.findById(authorId, (err, author) => {
        bookToAdd.authors.push(author)
        author.books.push(bookToAdd)
        tags.forEach(tag => {
          bookToAdd.tags.push(tag)
          tag.books.push(bookToAdd)
          tag.save((err, tag) => {
            if (err) return console.error(err)
          })
        })

        author.save((err, author) => {
          if (err) return console.error(err)
        })

        bookToAdd.save((error, bookToAdd) => {
          if (error) return console.error(error)
          res.redirect('/books')
        })
      })
    })
  }
}

module.exports = BookController
