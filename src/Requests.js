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
            console.log('hey', res.data)
            this.setState({ favourites: res.data })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <section>
                {this.state.favourites.map(favourite => {
                    return (
                        <div>{favourite.id}</div>
                    )
                })}
            </section>
        )
    }
}

export default GetFavouriteTweets