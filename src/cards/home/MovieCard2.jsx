import React from 'react';
import { useNavigate } from 'react-router-dom';
import './movieCard2.css';
import { PlayButton } from '../../components';

const HeroCard = ({ data }) => {
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
        <div className='heroCard'>
            <div className="heroCard-img">
                <div className="overlay"></div>
                <img src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} alt="movieImage" />
            </div>
            <div className="heroCard-content">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='movieImage' className="heroCard-content-img" />
                <div className="heroCard-content-details">
                    <div className="title">
                        <h2>{title}</h2>
                        <p>Watch the New Movie Trailer Now</p>
                    </div>
                    <PlayButton size="44px" onClick={() => { navigate('/movie/' + data.id) }} />
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
