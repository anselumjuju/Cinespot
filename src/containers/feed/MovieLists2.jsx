import React from 'react'
import './movieLists2.css'

import { MovieCard } from '../../cards'

const MovieLists2 = (props) => {

    const movies = props.movies

    return (
        <div className="movieLists2">
            <div className="movieLists2-nav">
                {
                    (props.title) && <h1>{props.title}</h1>
                }
                {
                    (props.text) && <h4>{props.text}</h4>
                }
            </div>
            <div className='movieLists2-lists'>
                {
                    movies ? (
                        movies.map((movie, index) => <MovieCard key={index} data={movie} />)
                    ) : (
                        <p>No movies found</p>
                    )
                }
            </div>
        </div>
    )
}

export default MovieLists2