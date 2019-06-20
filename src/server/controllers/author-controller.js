const Author = require("../models/authors/author");

class AuthorController {
  static renderAuthors(req, res, next) {
    Author.find({}, (err, authors) => {
      res.render("authors", { authors });
    });
  }

  static renderAuthor(req, res, next) {
    const id = req.params.id;
    var query = Author.where({ _id: id });
    query.findOne((err, author) => {
      if (err) return console.error(err);
      if (author) {
        res.render("author", { author });
      }
    });
  }

  static addAuthor(req, res, next) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const authorToAdd = new Author({
      firstName,
      lastName
    });

    authorToAdd.save((err, author) => {
      if (err) return console.error(err);
      res.redirect("/authors");
    });
  }
}

module.exports = AuthorController;
