class BookController {
  static renderBooks(req, res, next) {
    res.render("index");
  }

  static renderBook(req, res, next) {
    res.render("book");
  }
}

module.exports = BookController;
