import React from 'react'
import './movieLists2.css'

import { MovieCard } from '../../cards'

const MovieLists2 = ({ title, text, movies }) => {

    return (
        <div className="movieLists2">
            {movies ? (
                <>
                    <div className="movieLists2-nav">
                        {
                            (title) && <h1>{title}</h1>
                        }
                        {
                            (text) && <h4>{text}</h4>
                        }
                    </div>
                    <div className='movieLists2-lists'>
                        {
                            movies.map((movie, index) => <MovieCard key={index} data={movie} />)

                        }
                    </div>
                </>
            ) : (
                <p>Loading</p>
            )}
        </div>
    )
}

export default MovieLists2

