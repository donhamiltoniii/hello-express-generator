const Book = require("./book");

class BookRepository {
  constructor() {
    this._books = {};
  }

  addBook(book) {
    if (book.constructor !== Book) {
      throw new Error("Only books may be added to a BookRepository");
    }
    this._books[book.id] = book;
  }

  removeBook(id) {
    delete this._books[id];
  }

  getBook(id) {
    return this._books[id];
  }

  get books() {
    return this._books;
  }
}

module.exports = BookRepository;
