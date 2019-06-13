class HomeController {
  static renderHomePage(req, res, next) {
    res.redirect("/books");
  }
}

module.exports = HomeController;
