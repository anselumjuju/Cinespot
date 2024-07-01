import React from 'react'
import './trendingCards.css'

import { SecondaryButton } from '../../components'
import { MovieCard2 } from '../../cards'
import { slides } from '../../constants/constant'

const TrendingCards = () => {

    return (
        <div className='trendingCards'>
            <div className="trendingCards_nav">
                <h4>Trending</h4>
                <SecondaryButton text='Explore' />
            </div>
            <div className="movies-list">
                {
                    slides.map((movie, index) =>
                        <MovieCard2 key={index} {...movie} />)
                }
            </div>
        </div>
    )
}

export default TrendingCards