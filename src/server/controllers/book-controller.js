const mongoose = require("mongoose");

const Book = require("../models/books/book");

class BookController {
  static renderBooks(req, res, next) {
    Book.find({}, (err, books) => {
      res.render("books", { books });
    });
  }

  static renderBook(req, res, next) {
    const id = req.params.id;
    var query = Book.where({ _id: id });
    query.findOne((err, book) => {
      if (err) return handleError(err);
      if (book) {
        res.render("book", { book });
      }
    });
  }

  static addBook(req, res, next) {
    const title = req.body.title;
    const author = req.body.author;
    const isbn = req.body.isbn;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    const bookToAdd = new Book({
      title,
      author,
      isbn,
      description,
      imageUrl
    });

    bookToAdd.save((error, bookToAdd) => {
      if (error) return console.error(error);
      res.redirect("/books");
    });
  }
}

module.exports = BookController;
