const tagSchema = require("./tag-schema");
const mongoose = require("mongoose");

module.exports = mongoose.model("Tag", tagSchema);
