var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var homeRouter = require("./src/server/routes/home-router");
const bookRouter = require("./src/server/routes/books-router");
const authorRouter = require("./src/server/routes/authors-router");

var app = express();

// db setup
require("./src/server/models/db");

// view engine setup
app.set("views", path.join(__dirname, "src/server/views"));
app.set("view engine", "hbs");

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src/public")));

// routers
app.use("/", homeRouter);
app.use("/books", bookRouter);
app.use("/authors", authorRouter);

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
