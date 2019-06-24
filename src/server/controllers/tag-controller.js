const Tag = require("../models/tags/tag");

class TagController {
  static renderTags(req, res, next) {
    Tag.find({}, (err, tags) => {
      res.render("tags", { tags });
    });
  }

  static renderTag(req, res, next) {
    const id = req.params.id;
    var query = Tag.where({ _id: id });
    query
      .findOne()
      .populate(["books"])
      .exec((err, tag) => {
        if (err) return console.error(err);
        if (tag) {
          console.log(tag);
          res.render("tag", { tag });
        }
      });
  }

  static addTag(req, res, next) {
    const name = req.body.name;

    const tagToAdd = new Tag({
      name
    });

    tagToAdd.save((error, tag) => {
      if (error) return console.error(error);
      res.redirect("/tags");
    });
  }
}

module.exports = TagController;
