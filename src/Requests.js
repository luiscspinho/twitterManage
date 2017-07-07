import React from 'react';
import axios from 'axios';

class GetFavouriteTweets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favourites: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/api/getFavouriteTweets/').then(res => {
            console.log('data', res.data)
            this.setState({ favourites: res.data })
        }).catch(err => console.log(err))
    }

    searchTweet = (hashtag, keyword) => {
        console.log('hashtag ' + hashtag + ' and keyword ' + keyword)
        axios.get('http://localhost:8000/api/getTweetHashtagKeyword?hashtag=India&keyword=Varanasi').then(res => {
            console.log('data search tweet', res)
            this.setState({ favourites: res.data })
        }).catch(err => console.log(err))
    }

    render() {
        return (            
            <section>
                Hashtag: <TextField /><br/>
                keyword: <TextField /><br/>
                <SearchButton text="Search Tweet!"
                              hashtag="3"
                              keyword="5"
                              searchTweet={this.searchTweet}
                />
                <div>
                    {this.state.favourites.map(favourite => {
                        return (
                            <div key={favourite.id}>
                                Name: {favourite.full_text}<br/>
                                User: {favourite.user.name}
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

const TextField = (props) => <input type="text" />

class SearchButton extends React.Component {

    render() {
        return (
            <button onClick={() => this.props.searchTweet(this.props.hashtag, this.props.keyword)}>
                {this.props.text}
            </button>            
        )
    }
}

export default GetFavouriteTweets