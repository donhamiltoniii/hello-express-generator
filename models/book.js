class Book {
  constructor(id, title, author, isbn, description) {
    this._id = id;
    this._title = title;
    this._author = author;
    this._isbn = isbn;
    this._description = description;
  }

  get id() {
    return this._id;
  }

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
}
