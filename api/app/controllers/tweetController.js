const twitterApi = require ('../api/twitterApi')
const favouritesApi = require ('../api/favouritesApi')

const handleSuccess = res => result => res.status('200').send(result)
const handleReject = res => err => res.status('500').send(err)

exports.getTweetHashtagKeyword = (req, res) => {
  return twitterApi.getTweetHashtagKeyword(req.query).then(handleSuccess(res), handleReject(res))
}

exports.retweet = (req, res) => {
  return twitterApi.retweet(req.params).then(handleSuccess(res), handleReject(res))
}

exports.unretweet = (req, res) => {
  return twitterApi.unretweet(req.params).then(handleSuccess(res), handleReject(res))
}

exports.getFavouriteTweets = (req, res) => {
  return favouritesApi.getFavouriteTweets().then(handleSuccess(res), handleReject(res))
}

exports.addFavouriteTweet = (req, res) => {
  return favouritesApi.addFavouriteTweet(req.body).then(handleSuccess(res), handleReject(res))
}