import React from 'react'
import './slider.css'
import { PlayButton } from '../../components'

const Slider = ({ data }) => {

    const {
        thumbnail = 'https://via.placeholder.com/174x225',
        poster = 'https://via.placeholder.com/174x225',
        title = 'Unknown Movie'
    } = data

    return (
        <div className='slider'>
            <div className="slider_img">
                <img src={thumbnail} alt="movieImage" className="slider_img-blur" />
                <img src={thumbnail} alt="movieImage" className="slider_img-img" />
            </div>
            <div className="slider_content">
                <div className="moviePoster">
                    <img src={poster} alt="moviePoster" />
                </div>
                <div className="slider_content-details">
                    <PlayButton size={'80px'} />
                    <div className="slider_content-details-text">
                        <h2>{title}</h2>
                        <p>Watch the New Movie Trailer Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Slider