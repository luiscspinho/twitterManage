const routes = {}
routes.twitter = require('./controllers/tweetController')

module.exports = (app) => {

    app.get('/api/getTweetHashtagKeyword/', routes.twitter.getTweetHashtagKeyword)
    app.get('/api/getFavouriteTweets/', routes.twitter.getFavouriteTweets)
    app.post('/api/addFavouriteTweet/', routes.twitter.addFavouriteTweet)
    app.post('/api/retweet/:id', routes.twitter.retweet)
    app.post('/api/unretweet/:id', routes.twitter.unretweet)
};