class Book {
  constructor(title, author, isbn, description, imageUrl) {
    this._title = title;
    this._author = author;
    this._isbn = isbn;
    this._description = description;
    this._imageUrl = imageUrl;
  }

  // get id() {
  //   return this._id;
  // }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get isbn() {
    return this._isbn;
  }

  get description() {
    return this._description;
  }

  get imageUrl() {
    return this._imageUrl;
  }
}

module.exports = Book;
