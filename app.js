const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./middleware/auth.middleware");
const { DB } = require("./config/config");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const commentsRouter = require("./routes/comments");
const personRouter = require("./routes/person");
const storyRouter = require("./routes/story");

const app = express();
app.use(cors());
mongoose.connect("mongodb://" + DB.HOST + ":" + DB.PORT + "/" + DB.DBNAME);

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});

mongoose.connection.on("error", (e) => {
  console.error("mongodb connection error", e);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(auth);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/comments", commentsRouter);
app.use("/person", personRouter);
app.use("/story", storyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
