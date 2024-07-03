import React from 'react'
import './movieLists2.css'

import { MovieCard } from '../../cards'
import { movies } from '../../constants/constant'

const MovieLists2 = (props) => {

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
                {movies.map((movie, index) => <MovieCard key={index} data={movie} />)}
            </div>
        </div>
    )
}

export default MovieLists2