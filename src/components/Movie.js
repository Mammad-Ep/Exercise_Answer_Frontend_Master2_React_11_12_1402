import React, { Component } from 'react'

class Movie extends Component {
    constructor(props) {
        super(props);
    };



    
    render() { 
        const{title,director,poster,genre,year}=this.props;
        return ( 
            <div className='movie-box'>
                <img src={poster} alt={title} />
                <h3>* {title} *</h3>
                <div>
                    <span>year: <strong>{year}</strong></span>
                    <p>Director: <strong>{director}</strong></p>
                </div>

                <div>
                    <span> : Genre</span>
                    <p><strong>{genre}</strong></p>
                </div>
                
            </div>
         );
    }
}
 
export default Movie;