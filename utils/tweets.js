const { TwitterClient } = require('twitter-api-client');
require('dotenv').config();

const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});

const totalNumberofTweetsPerQuery = async (query) => {
  const rweetsData = await twitterClient.tweets.search({
    q: query,
    count: 20,
  });
  const ids = rweetsData.statuses.map((tweet) => tweet.id_str);
  const createtdDate = rweetsData.statuses.map((tweet) => tweet.created_at);
  const metrics = await twitterClient.metrics.tweets({
    ids: ids,
    'tweet.fields': 'public_metrics',
  });
  reweets = metrics.data.map((metric) => metric.public_metrics.retweet_count);
  totalRetweets = reweets.reduce((total, count) => total + count);
  console.log(totalRetweets);
  return totalRetweets;
};

module.exports = {
  totalNumberofTweetsPerQuery,
};
