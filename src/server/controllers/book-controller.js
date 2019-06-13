const data = require("../models/populator");

class BookController {
  static renderBooks(req, res, next) {
    const books = data.books;
    res.render("books", { books });
  }

  static renderBook(req, res, next) {
    const id = req.params.id;
    const book = data.getBook(id);
    res.render("book", { book });
  }
}

module.exports = BookController;
