import React, { useEffect, useState } from 'react'
import './trendingCards.css'

import { SecondaryButton } from '../../components'
import { MovieCard2 } from '../../cards'

import { fetchTrendingMovies } from '../../api/fetchData'

const TrendingCards = () => {

    const [fetchedMovies, setFetchedMovies] = useState([])


    useEffect(() => {
        async function fetchData() {
            let fetchedMovies = await fetchTrendingMovies(2);
            setFetchedMovies(fetchedMovies);
        }

        fetchData();
    }, [])

    return (

        <div className='trendingCards'>
            <div className="trendingCards_nav">
                <h4>Trending</h4>
                <SecondaryButton text='Explore' />
            </div>
            <div className="movies-list">
                {
                    fetchedMovies.map((movie, index) =>
                        <MovieCard2 key={index} data={movie} />)
                }
            </div>
        </div>
    )
}

export default TrendingCards