const util_tweets = require('../utils/tweets');

const showGraph = async (req, res, next) => {
  try {
    totalBlockChainRetweets = await util_tweets.totalNumberofTweetsPerQuery(
      'blockchain'
    );
    totaNFTRetweets = await util_tweets.totalNumberofTweetsPerQuery('nft');
    totaCryptoRetweets = await util_tweets.totalNumberofTweetsPerQuery(
      'crypto'
    );
    pti = await util_tweets.totalNumberofTweetsPerQuery(
      'امپورٹڈ_حکومت_نامنظور'
    );
    res.render('pages/index', {
      labels: ['blockchain', 'nft', 'crypto', 'pti'],
      data: [totalBlockChainRetweets, totaNFTRetweets, totaCryptoRetweets, pti],
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  showGraph,
};
