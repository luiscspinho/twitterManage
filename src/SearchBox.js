import React from 'react'

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hashtag: '',
            keyword: ''
        }
    }

    onChange = (key) => (event) => {
        this.setState({[key]: event.target.value})
    }

    searchTweetByHashtagKeyword = () => {
        this.props.searchTweetByHashtagKeyword(this.state.hashtag, this.state.keyword)
    }

    getFavTweets = () => {
        this.props.getFavTweets()
    }

    render() {
        return (
            <section>
                Hashtag: <input value={this.state.hashtag} onChange={this.onChange('hashtag')} /><br/>
                Keyword: <input value={this.state.keyword} onChange={this.onChange('keyword')} /><br/>
                <button onClick={this.searchTweetByHashtagKeyword}>Search Tweet!</button>
                <button onClick={this.getFavTweets}>Get Favourites!</button>
            </section>
        )
    }
}

export default SearchBox