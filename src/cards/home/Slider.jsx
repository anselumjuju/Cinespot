import React from 'react';
import { useNavigate } from 'react-router-dom';
import './slider.css';
import { PlayButton } from '../../components';

const Slider = ({ data }) => {
    const navigate = useNavigate();
    if (!data) {
        data = {
            backdrop_path: 'https://via.placeholder.com/174x225',
            poster_path: 'https://via.placeholder.com/174x225',
            title: 'Unknown Movie'
        };
    }

    const {
        backdrop_path,
        poster_path,
        title
    } = data;

    return (
        <div className='slider'>
            <div className="slider_img">
                <img src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt="movieImage" className="slider_img-blur" />
                <img src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} alt="movieImage" className="slider_img-img" />
            </div>
            <div className="slider_content">
                <div className="moviePoster">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="moviePoster" />
                </div>
                <div className="slider_content-details">
                    <PlayButton size={'80px'} onClick={() => navigate('/movie/' + data.id)}/>
                    <div className="slider_content-details-text">
                        <h2>{title}</h2>
                        <p>Watch the New Movie Trailer Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
