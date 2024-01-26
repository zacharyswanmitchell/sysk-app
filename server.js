var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");
let Parser = require("rss-parser");

dotenv.config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var feedRouter = require('./routes/feed');

var app = express();

// let parser = new Parser(); // Create a new instance of rss-parser
// // Fetch and parse the RSS feed
// let feedItems = (async () => {
// 	try {
// 		let feed = await parser.parseURL(
// 			"https://omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/A91018A4-EA4F-4130-BF55-AE270180C327/44710ECC-10BB-48D1-93C7-AE270180C33E/podcast.rss"
// 		);
//     console.log(feed.title);
//     feedItems = feed.items;
//     return feedItems;
// 	} catch (err) {
//     console.error(err);
// 	}
// })();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/feed', feedRouter); // Add the feed router to the middleware chain

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
