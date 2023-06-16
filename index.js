const fetch = require('node-fetch');

class RedditJsonApi {
  /**
   * Create Reddit JSON API object to construct API request
   * @param {object} option Option to make a request
   * @param {string} option.subReddit Subreddit name
   * @param {'controversial' | 'best' | 'hot' | 'new' | 'random' | 'rising' | 'top'} option.listing Listing type what content will be sorted of available options are (controversial, best, hot, new, random, rising, top)
   * @param {number} option.limit Amount of data to fetch per request
   * @param {'hour' | 'day' | 'week' | 'month' | 'year' | 'all'} option.timeFrame Timeframe of when the post created, input available are (hour, day, week, month, year, all)
   */
  constructor({ subReddit, listing, limit, timeFrame }) {
    this.subReddit = subReddit;
    this.listing = listing;
    this.limit = limit;
    this.timeFrame = timeFrame;

    this.url = `https://www.reddit.com/r/${subReddit}/${listing}.json?limit=${limit}&t=${timeFrame}`;
  }

  /**
   * 
   * @param {string} subReddit Subreddit name
   * @returns {RedditJsonApi}
   */
  setSubReddit = (subReddit) => {
    this.subReddit = subReddit;
    return this;
  }

  /**
   * 
   * @param {'controversial' | 'best' | 'hot' | 'new' | 'random' | 'rising' | 'top'} listing Listing type what content will be sorted of, available options are (controversial, best, hot, new, random, rising, top)
   * @returns {RedditJsonApi}
   */
  setListing = (listing) => {
    this.listing = listing;
    return this;
  }

  /**
   * 
   * @param {number} limit Amount of data to fetch per request
   * @returns {RedditJsonApi}
   */
  setLimit = (limit) => {
    this.limit = limit;
    return this;
  }

  /**
   * 
   * @param {'hour' | 'day' | 'week' | 'month' | 'year' | 'all'} timeFrame Timeframe of when the post created, input available are (hour, day, week, month, year, all)
   * @returns {RedditJsonApi}
   */
  setTimeFrame = (timeFrame) => {
    this.timeFrame = timeFrame;
    return this;
  }

  /**
   * Get the data from reddit based on configuration
   * @returns {Promise<object>}
   */
  getResults = async () => {
    this.url = `https://www.reddit.com/r/${this.subReddit}/${this.listing}.json?limit=${this.limit}&t=${this.timeFrame}`;
    const response = await fetch(this.url);
    const data = await response.json();

    return data;
  }

  /**
   * Parse this object to json string
   * @returns {string}
   */
  toString = () => JSON.stringify(this, null, 2);
}

const main = async () => {
  const redditApi = new RedditJsonApi({
    subReddit: 'nmsglyphexchange',
    listing: 'new',
    limit: 5,
    timeFrame: "day",
  });

  console.log(redditApi.toString());
  await redditApi.getResults();
}

main();

module.exports = RedditJsonApi;
