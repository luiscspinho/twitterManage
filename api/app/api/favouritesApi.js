var fs = require('fs');

function getFavouriteTweets () {    
    return new Promise((resolve,reject) => {
        fs.readFile('./api/config/favouriteTweets.json', 'utf8', function (err, data) {
            if (err) return reject(err);
            return resolve(JSON.parse(data));
        });
    });
}

function addFavouriteTweet (newTweet) {
    const filePath = '../../config/favouriteTweets.json';

    return new Promise ((resolve, reject) => {
        const obj = require(filePath);
        obj.push(newTweet)
        fs.writeFile(__dirname.split('/app')[0] + '/config/favouriteTweets.json', JSON.stringify(obj), function (err, data) {
            if (err) return reject(err);
            return resolve('Added with success!');
        });
    })
}

exports.addFavouriteTweet = addFavouriteTweet;
exports.getFavouriteTweets = getFavouriteTweets;