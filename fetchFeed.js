const Parser = require("rss-parser"); // Import the rss-parser library
let parser = new Parser(); // Create a new instance of rss-parser

// Fetch and parse the RSS feed
async function fetchFeed() {
	try {
		let feed = await parser.parseURL(
			"https://omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/A91018A4-EA4F-4130-BF55-AE270180C327/44710ECC-10BB-48D1-93C7-AE270180C33E/podcast.rss"
		);
		console.log(feed);
		return feed;
	} catch (err) {
		console.error(err);
	}
}

module.exports = fetchFeed;
// Export the fetchFeed function
