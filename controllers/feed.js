const fetchFeed = require("../fetchFeed"); // Import the fetchFeed function

// Get the full feed
async function getFeed(req, res, next) {
    try {
        let feed = await fetchFeed(); // Fetch the feed
        res.render("feeds/index", { title: "Feed", feed: feed });
    }
    catch (err) {
        console.error(err);
    }
}

async function getFeedItems(req, res, next) {
    try {
        let feed = await fetchFeed(); // Fetch the feed
        res.json(feed.items); // Send the feed items as JSON
    }
    catch (err) {
        console.error(err);
    }
}

        

module.exports = { getFeed, getFeedItems };