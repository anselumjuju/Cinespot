import React from 'react'
import './heroSlider.css'
import { PlayButton } from '../../components'

const HeroSlider = ({ Thumbnail = 'https://via.placeholder.com/174x225', poster = 'https://via.placeholder.com/174x225', title = 'Unknown Movie' }) => {
    return (
        <div className='heroSlider'>
            <div className="heroSlider_img">
                <img src={Thumbnail} alt="movieImage" className="heroSlider_img-blur" />
                <img src={Thumbnail} alt="movieImage" className="heroSlider_img-img" />
            </div>
            <div className="heroSlider_content">
                <img src={poster} alt="moviePoster" className="moviePoster" />
                <div className="heroSlider_content-details">
                    <PlayButton size={'80px'} />
                    <div className="heroSlider_content-details-text">
                        <h2>{title}</h2>
                        <p>Watch the New Movie Trailer Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeroSlider