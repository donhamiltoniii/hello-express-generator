var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var homeRouter = require("./src/server/routes/home-router");
const bookRouter = require("./src/server/routes/books-router");

const Book = require("./src/server/models/books/book");

const { username, password } = require("./src/server/config/db");

var app = express();

const dbConnection = `mongodb+srv://${username}:${password}@cluster0-ljwdh.mongodb.net/test?retryWrites=true&w=majority`;

// db setup
const mongoose = require("mongoose");

mongoose.connect(dbConnection, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to the DB!");
});

const BookSchema = mongoose.model(
  "BookSchema",
  new mongoose.Schema({
    _title: String,
    _author: String,
    _isbn: String,
    _description: String,
    _imageUrl: String
  })
);

console.log(
  new Book(
    "Refactoring",
    "Martin Fowler",
    "0201485672",
    "Description: Great, amazing book about TDD and refactoring",
    "https://images-na.ssl-images-amazon.com/images/I/51K-M5hR8qL._SX392_BO1,204,203,200_.jpg"
  )
);

const refactoring = new BookSchema(
  new Book(
    "Refactoring",
    "Martin Fowler",
    "0201485672",
    "Description: Great, amazing book about TDD and refactoring",
    "https://images-na.ssl-images-amazon.com/images/I/51K-M5hR8qL._SX392_BO1,204,203,200_.jpg"
  )
);

refactoring.save((error, refactoring) => {
  if (error) return console.error(error);
  console.log(refactoring._title, refactoring._author);
});

// view engine setup
app.set("views", path.join(__dirname, "src/server/views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public")));

app.use("/", homeRouter);
app.use("/books", bookRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
