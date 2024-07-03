import React, { useRef, useEffect } from 'react'
import './movieLists1.css'

import { MovieCard } from '../../cards'
import { NavigatingButton } from '../../components'
import { movies } from '../../constants/constant'

const MovieLists1 = ({data}) => {
    const {title = 'Popular'} = data
    const listRef = useRef(null)

    const handlePreviousClick = () => {
        if (listRef.current) {
            listRef.current.scrollTo({
                left: listRef.current.scrollLeft - 200,
                behavior: 'smooth'
            });
        }
    }
    const handleNextClick = () => {
        if (listRef.current) {
            listRef.current.scrollTo({
                left: listRef.current.scrollLeft + 200,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className='movieLists1'>
            <div className="movieLists1-nav">
                <h4>{title}</h4>
                <NavigatingButton onPrevious={handlePreviousClick} onNext={handleNextClick} />
            </div>
            <div className="movieLists1-list" ref={listRef}>
                {movies.map((movie, index) => <MovieCard key={index} data={movie} />)}
            </div>
        </div>
    )
}

export default MovieLists1