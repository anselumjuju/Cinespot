import React from 'react'
import './movieCard.css'
import { useNavigate } from 'react-router-dom'

import { ExploreButton } from '../../components'

const MovieCard = ({ data }) => {
    const navigate = useNavigate()
    const {
        poster_path = 'https://via.placeholder.com/174x225',
        title = 'Unknown Movie',
        vote_average = 'N/A'
    } = data


    return (
        <div className='movieCard'>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="movieImage" width='174px' />
            <div className="movieCard-details">
                <p className="movieCard-details-title twoline-ellipses" title={title}>{title}</p>
                <div className="movieCard-details-fav">
                    <div className="movieCard-details-rating">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9343 6.49993L10.4733 8.62345L11.2231 11.7992C11.2645 11.9715 11.2538 12.1523 11.1925 12.3187C11.1312 12.485 11.0219 12.6295 10.8785 12.7337C10.7352 12.838 10.5641 12.8975 10.387 12.9046C10.2098 12.9117 10.0345 12.8661 9.88327 12.7737L7.12155 11.074L4.35819 12.7737C4.20694 12.8656 4.03187 12.9107 3.85503 12.9034C3.67819 12.896 3.50748 12.8365 3.36441 12.7323C3.22133 12.6281 3.11228 12.4839 3.051 12.3178C2.98971 12.1518 2.97892 11.9713 3.01999 11.7992L3.77249 8.62345L1.31155 6.49993C1.17773 6.38427 1.08094 6.23175 1.03329 6.06142C0.985632 5.89108 0.989214 5.71048 1.04359 5.54217C1.09796 5.37386 1.20071 5.2253 1.33902 5.11504C1.47732 5.00478 1.64504 4.93771 1.82124 4.9222L5.0478 4.66189L6.29249 1.6497C6.35986 1.48554 6.47452 1.34512 6.62191 1.24629C6.76929 1.14746 6.94273 1.0947 7.12018 1.0947C7.29763 1.0947 7.47107 1.14746 7.61845 1.24629C7.76584 1.34512 7.8805 1.48554 7.94788 1.6497L9.19202 4.66189L12.4186 4.9222C12.5951 4.93713 12.7633 5.00383 12.9021 5.11394C13.0409 5.22404 13.1442 5.37267 13.1989 5.54118C13.2536 5.7097 13.2574 5.89061 13.2097 6.06126C13.1621 6.2319 13.0651 6.38469 12.931 6.50048L12.9343 6.49993Z" fill="#F5C518" />
                        </svg>
                        <p>{(Math.round(vote_average * 10) / 10).toString()}</p>
                    </div>
                    <div className="movieCard-details-wishList">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1C6.15046 1.02244 4.38299 1.76714 3.07507 3.07507C1.76714 4.38299 1.02244 6.15046 1 8C1.02244 9.84954 1.76714 11.617 3.07507 12.9249C4.38299 14.2329 6.15046 14.9776 8 15C9.84954 14.9776 11.617 14.2329 12.9249 12.9249C14.2329 11.617 14.9776 9.84954 15 8C14.9776 6.15046 14.2329 4.38299 12.9249 3.07507C11.617 1.76714 9.84954 1.02244 8 1ZM12 8.5H8.5V12H7.5V8.5H4V7.5H7.5V4H8.5V7.5H12V8.5Z" fill="#F2F2F2" />
                        </svg>
                    </div>
                </div>
                <ExploreButton text="Explore" onClick={() => navigate(`/movie/${data.id}`)} />
            </div>
        </div>
    )
}



export default MovieCard


