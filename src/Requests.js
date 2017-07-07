import React from 'react';
import axios from 'axios';
import SearchBox from './SearchBox.js'

class GetFavouriteTweets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favourites: []
        }
    }

    getFavTweets = () => {
        axios.get('http://localhost:8000/api/getFavouriteTweets/').then(res => {
            this.setState({ favourites: res.data })
        }).catch(this.handleError)
    }

    searchTweetByHashtagKeyword = (hashtag = '', keyword = '') => {
        console.log('CLICK hashtag ' + hashtag + ' and keyword ' + keyword)
        
        axios.get('http://localhost:8000/api/getTweetHashtagKeyword?hashtag=' + hashtag + '&keyword=' + keyword + '').then(res => {
            console.log('RESULT data search tweet', res)
            this.setState({ favourites: res.data })
        }).catch(this.handleError)
    }

    render() {
        return (            
            <section>
                <SearchBox searchTweetByHashtagKeyword={this.searchTweetByHashtagKeyword} 
                           getFavTweets={this.getFavTweets}/>

                <div>
                    {this.state.favourites.map(favourite => {
                        return (
                            <div key={favourite.id}>
                                Name: {favourite.full_text}<br/>
                                User: {favourite.user.name}<br/><br/>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }

    handleError = (err) => console.log(err)
}

export default GetFavouriteTweets