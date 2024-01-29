const fetchFeed = require("../fetchFeed"); // Import the fetchFeed function


async function getFeedItems(req, res, next) {
    try {
        let feedItems = await fetchFeed();
        res.json(feedItems);
        console.log("Got feed items");
        
    } catch (err) {
        console.error(err);
    }
}
module.exports = { getFeedItems };