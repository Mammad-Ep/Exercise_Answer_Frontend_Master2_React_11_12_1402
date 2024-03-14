import React, { Component } from 'react';
import axios from 'axios';
// import data from '../json/movies.json';
import Movie from './Movie';
import SidebarMovie from './SidebarMovie';

// __________________________________________________________________________________

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            temp_movies: [],
            temp: [],
            error: false,
        }
    };

    componentDidMount = () => {
        this.getDataApi()
    };

    getDataApi = () => {
        fetch('/json/movies.json')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.movies,temp_movies:data.movies }))
    };

    changeMoviesBySearch = (value) => {
        console.log("title: " + value)
        const { movies } = this.state;

        var temp = [];
        if (value == '') {
            this.setState({ movies: this.state.temp_movies });
        }

        else {
            this.setState({ movies: this.state.temp_movies });
            for (const item of movies) {
                const title1 = item.Title;
                const title = title1.toLowerCase();
                const new_value = value.toLowerCase();
                if (title.includes(new_value)) {
                    temp.push(item);
                    this.setState({ movies: temp });
                }
            }
        }
    };

    get_genre_movies = () => {
        var temp_genre = [];
        for (const item of this.state.temp_movies) {
            const genres = item.Genre.split(',');
            for (const genre of genres) {
                if (!temp_genre.includes(genre.trim())) {
                    temp_genre.push(genre.trim())
                }
            }
        }
        return temp_genre
    };

    changeMoviesByGenre = (genre) => {
        var current_temp = this.state.temp;
        for (const item of this.state.temp_movies) {
            const Genre = item.Genre;
            if (Genre.includes(genre) && !current_temp.includes(item)) {
                current_temp.push(item);
                this.setState({ temp: current_temp });
            }
        }

        this.setState({ movies: current_temp });

    }

    render() {
        const { movies, error } = this.state;

        return (
            <>

                {error ? (
                    <h2>خطا در برقراری با سرور</h2>
                ) : (

                    <div className='movies-container'>
                        <div className='sidebar-movies'>
                            <SidebarMovie changeMoviesBySearch={this.changeMoviesBySearch} get_genre_movies={this.get_genre_movies
                            } changeMoviesByGenre={this.changeMoviesByGenre} remove_filter={this.removeFilter} />
                        </div>
                        <div className='movie-box-container'>
                            {movies.map((movie) => (
                                <Movie key={movie.Id} title={movie.Title} year={movie.Year} director={movie.Director} genre={movie.Genre} poster={movie.Poster} />
                            ))}
                        </div>

                    </div>
                )}

            </>
        );
    }
}

export default Movies;