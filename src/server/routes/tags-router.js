const express = require("express");
const router = express.Router();

const TagController = require("../controllers/tag-controller");

/* GET tags. */
router.get("/", TagController.renderTags);

/* GET tag. */
router.get("/:id", TagController.renderTag);

// Add a tag
router.post("/add", TagController.addTag);

module.exports = router;
