const express = require("express");
const router = express.Router();

const BookController = require("../controllers/book-controller");

/* GET books. */
router.get("/", BookController.renderBooks);

/* GET book. */
router.get("/:id", BookController.renderBook);

// Add a book
router.post("/add", BookController.addBook);

// Increase rating
router.get("/:id/rating/increase", BookController.increaseRating);

// Decrease rating
router.get("/:id/rating/decrease", BookController.decreaseRating);

module.exports = router;
