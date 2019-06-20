const Book = require("../models/books/book");
const Author = require("../models/authors/author");

class BookController {
  static renderBooks(req, res, next) {
    Book.find({}, (err, books) => {
      Author.find({}, (err, authors) => {
        res.render("books", { authors, books });
      });
    });
  }

  static renderBook(req, res, next) {
    const id = req.params.id;
    var query = Book.where({ _id: id });
    query.findOne((err, book) => {
      if (err) return console.error(err);
      if (book) {
        res.render("book", { book });
      }
    });
  }

  static addBook(req, res, next) {
    const title = req.body.title;
    const authorId = req.body.authorId;
    const isbn = req.body.isbn;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    const bookToAdd = new Book({
      title,
      isbn,
      description,
      imageUrl
    });

    Author.findById(authorId, (err, author) => {
      author.books.push(bookToAdd);
      bookToAdd.authors.push(author);

      author.save((err, author) => {
        if (err) return console.error(err);
      });

      bookToAdd.save((error, bookToAdd) => {
        if (error) return console.error(error);
        res.redirect("/books");
      });
    });
  }
}

module.exports = BookController;
