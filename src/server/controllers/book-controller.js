const Book = require("../models/books/book");
const Author = require("../models/authors/author");
const Tag = require("../models/tags/tag");

class BookController {
  static async renderBooks(req, res, next) {
    const books = await Book.find({});
    const authors = await Author.find({});
    const tags = await Tag.find({});

    res.render("books", { authors, books, tags });
  }

  static async renderBook(req, res, next) {
    const id = req.params.id;
    const book = await Book.where({ _id: id })
      .findOne()
      .populate(["authors", "tags"])
      .exec();

    res.render("book", { book });
  }

  static addBook(req, res, next) {
    const title = req.body.title;
    const authorId = req.body.authorId;
    const isbn = req.body.isbn;
    const description = req.body.description;
    const tags = req.body.tags;
    const imageUrl = req.body.imageUrl;

    const bookToAdd = new Book({
      title,
      isbn,
      description,
      imageUrl
    });

    Tag.find({ _id: tags }, (err, tags) => {
      Author.findById(authorId, (err, author) => {
        bookToAdd.authors.push(author);
        author.books.push(bookToAdd);
        tags.forEach(tag => {
          bookToAdd.tags.push(tag);
          tag.books.push(bookToAdd);
          tag.save((err, tag) => {
            if (err) return console.error(err);
          });
        });

        author.save((err, author) => {
          if (err) return console.error(err);
        });

        bookToAdd.save((error, bookToAdd) => {
          if (error) return console.error(error);
          res.redirect("/books");
        });
      });
    });
  }
}

module.exports = BookController;
