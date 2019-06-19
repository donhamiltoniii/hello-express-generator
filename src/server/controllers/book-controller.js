const Book = require("../models/books/book");
const Author = require("../models/authors/author");

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
    // TODO: Fix this fucking mess
    const title = req.body.title;
    const authorFirstName = req.body.authorFirstName;
    const authorLastName = req.body.authorLastName;
    const isbn = req.body.isbn;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;

    const author = new Author({
      firstName: authorFirstName,
      lastName: authorLastName
    });

    let authorId;

    author.save((error, author) => {
      if (error) return console.error(error);
      authorId = author._id;
    });

    const bookToAdd = new Book({
      title,
      author,
      isbn,
      description,
      imageUrl
    });

    bookToAdd.save((error, bookToAdd) => {
      if (error) return console.error(error);
      Author.findById(authorId, (err, author) => {
        console.log(author);
        bookToAdd.authors.push(author);
        bookToAdd.save((error, bookToSave) => {
          if (error) return console.error(error);
          res.redirect("/books");
        });
      });
    });
  }
}

module.exports = BookController;
