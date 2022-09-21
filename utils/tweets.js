const { TwitterClient } = require('twitter-api-client');
require('dotenv').config();

const twitterClient = new TwitterClient({
  apiKey: "scGy1FxbPUc1pVQvqNQnFdrIP",
  apiSecret:"UWVIqNSFC0SD769qJpYzlYjYkQ7dwDv1ZUugH2jt7UlQHsvhb7",
  accessToken:"1557460649344929792-9RypfpBvTNB9aZ0zILejjKpj2uNVlk",
  accessTokenSecret: "pTD0ZbWHnucU7DgTy9DnnmRGhPxsV1XY59JvERisUSdaH",
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
