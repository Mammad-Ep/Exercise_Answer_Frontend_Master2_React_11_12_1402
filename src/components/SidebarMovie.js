import React, { Component } from 'react'

class SidebarMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: ''
        }
    };

    changeInputHalndler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.changeMoviesBySearch(event.target.value)
    };

    clickGenreHandler = (event) => {
        const genre = event.target.dataset.genre;
        this.props.changeMoviesByGenre(genre)
    };

    state = {}
    render() {
        const { q } = this.state;
        const { get_genre_movies, remove_filter } = this.props;
        return (
            <>
                <div className='input-search' dir='ltr'>
                    <label htmlFor="q"><strong>Search Movie: </strong></label>
                    <input type="text" placeholder='search movie title....' id='q' name='q' value={q} onChange={this.changeInputHalndler} />
                </div>

                <div className='genres-box'>
                    {get_genre_movies().map((genre) => (
                        <button key={genre} data-genre={genre} onClick={this.clickGenreHandler}>{genre}</button>
                    ))}
                </div>

                {/* <button id='remove-filter' onClick={}>Remove Filter</button> */}
            </>
        );
    }
}

export default SidebarMovie;