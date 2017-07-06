const Twitter = require('twitter')
const tokens = require('../../config/tokens')

const client = new Twitter({
    consumer_key: tokens.consumer_key,
    consumer_secret: tokens.consumer_secret,
    access_token_key: tokens.access_token_key,
    access_token_secret: tokens.access_token_secret
})
const handleTwitterRequest = (resolve, reject) => (error, tweet) => error ? reject(error) : resolve(tweet)

function retweet (params) {
    const id = params.id

    return new Promise((resolve, reject) => {
        client.post('statuses/retweet/' + id, handleTwitterRequest(resolve, reject))
    })
}

function unretweet (params) {
    const id = params.id

    return new Promise((resolve, reject) => {
        client.post('statuses/unretweet/' + id, handleTwitterRequest(resolve, reject))
    })
}

function getTweetHashtagKeyword (query) {
    const keyword = query.keyword || ""
    const hashtag = query.hashtag || ""
    const param = {count: 3200, exclude_replies: true, include_rts: false} 

    return new Promise((resolve, reject) => {
        client.get('statuses/user_timeline', param, (error, timeline) => {            
            if (error) return reject(error)
            return resolve(filterTweetsHashtag(timeline, hashtag, keyword))            
        })
    })
}

const filterTweetsHashtag = (timeline, hashtag, keyword) => 
    timeline.filter((elem) => elem.text.includes(hashtag) && elem.text.includes(keyword))

exports.getTweetHashtagKeyword = getTweetHashtagKeyword
exports.retweet = retweet
exports.unretweet = unretweet