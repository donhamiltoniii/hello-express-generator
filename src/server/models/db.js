const mongoose = require("mongoose");

const Book = require("./books/book");

const { username, password } = require("../config/db");

const dbConnection = `mongodb+srv://${username}:${password}@cluster0-ljwdh.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(dbConnection, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to the DB!");
});
