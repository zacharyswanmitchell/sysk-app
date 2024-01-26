// routes/feed.js
var express = require("express");
var router = express.Router();

/* GET feed data. */
router.get("/", async function (req, res, next) {
	try {
		// Wait for the feedItems Promise to resolve
		const items = await feedItems;
		// Send the feed items as a response
		res.json(items);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
