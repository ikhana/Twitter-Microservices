const { TwitterClient } = require('twitter-api-client');
require('dotenv').config();

const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});

const totalNumberOfTweetsPerQuery = async (query) => {
  const retweetsData = await twitterClient.tweets.search({
    q: query,
    count: 20,
  });
  const ids = retweetsData.statuses.map((tweet) => tweet.id_str);
  const createdDate = retweetsData.statuses.map((tweet) => tweet.created_at);
  const metrics = await twitterClient.metrics.tweets({
    ids: ids,
    'tweet.fields': 'public_metrics',
  });
  retweets = metrics.data.map((metric) => metric.public_metrics.retweet_count);
  totalRetweets = retweets.reduce((total, count) => total + count);
  console.log(totalRetweets);
  return totalRetweets;
};

module.exports = {
  totalNumberOfTweetsPerQuery,
};
