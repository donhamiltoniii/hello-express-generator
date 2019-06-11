const express = require("express");
const router = express.Router();

const BookController = require("../controllers/book-controller");

/* GET books. */
router.get("/", BookController.renderBooks);

/* GET book. */
router.get("/:id", BookController.renderBook);

module.exports = router;
