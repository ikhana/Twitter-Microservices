const util_tweets = require('../utils/tweets');

const showGraph = async (req, res, next) => {
  try {
    totalBlockChainRetweets = await util_tweets.totalNumberOfTweetsPerQuery(
      'blockchain'
    );
    totalNFTRetweets = await util_tweets.totalNumberOfTweetsPerQuery('nft');
    totalCryptoRetweets = await util_tweets.totalNumberOfTweetsPerQuery(
      'crypto'
    );
    pti = await util_tweets.totalNumberOfTweetsPerQuery(
      'امپورٹڈ_حکومت_نامنظور'
    );
    res.render('pages/index', {
      labels: ['blockchain', 'nft', 'crypto', 'pti'],
      data: [
        totalBlockChainRetweets,
        totalNFTRetweets,
        totalCryptoRetweets,
        pti,
      ],
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  showGraph,
};
