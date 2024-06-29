import React from 'react'
import './heroCard.css'

import { PlayButton } from '../../components'

const HeroCard = ({ bgImage = 'https://via.placeholder.com/174x225', poster = 'https://via.placeholder.com/174x225', title = 'Unknown' }) => {
    return (
        <div className='heroCard'>
            <div className="heroCard-img">
                <div className="overlay"></div>
                <img src={bgImage} alt="movieImage" />
            </div>
            <div className="heroCard-content">
                <img src={poster} alt='movieImage' className="heroCard-content-img" />
                <div className="heroCard-content-details">
                    <div className="title">
                        <h2>{title}</h2>
                        <p>Watch the New Movie Trailer Now</p>
                    </div>
                    <PlayButton size="44px" />
                </div>
            </div>
        </div>
    )
}



export default HeroCard