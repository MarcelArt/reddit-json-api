# reddit-json-api

Simple reddit json api wrapper that able to fetch data without authentication

## Installing

`npm i reddit-json-api`

## Usage

1. Import package

```js
const RedditJsonApi = require('reddit-json-api');
```

2. Initialize RedditJsonApi

```js
const reddit = new RedditJsonApi();
```

Then you can set up the parameters to be sent

```js
reddit
  .setSubReddit('node')
  .setListing('new')
  .setLimit(5)
  .setTimeFrame('day');
```

3. After that you can simply get the result by calling `getResults()`

```js
const data = await reddit.getResults();
```

It is also possible to immediately construct the parameter

```js
const reddit = new RedditJsonApi({
  subReddit: 'node',
  listing: 'new',
  limit: 5,
  timeFrame: 'day',
});
const data = await reddit.getResults();
```

## Method
Parameter | Function | Description | Value accepted
--------- | -------- | ----------- | --------------
subReddit | setSubReddit | Subreddit name without "r/" | String
listing | setListing | Listing type what content will be sorted of available options | String: controversial, best, hot, new, random, rising, top
limit | setLimit | Amount of data to fetch per request | Number
timeFrame | setTimeFrame | imeframe of when the post created | String: hour, day, week, month, year, all