class HomeController {
  static renderHomePage(req, res, next) {
    res.render("index", { title: "We Can Code IT" });
  }
}

module.exports = HomeController;
