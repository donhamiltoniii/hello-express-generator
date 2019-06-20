const express = require("express");
const router = express.Router();

const AuthorController = require("../controllers/author-controller");

/* GET books. */
router.get("", AuthorController.renderAuthors);

/* GET book. */
router.get("/:id", AuthorController.renderAuthor);

// Add a book
router.post("/add", AuthorController.addAuthor);

module.exports = router;
