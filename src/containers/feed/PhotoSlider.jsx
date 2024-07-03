import React, { useRef, useEffect } from 'react'
import './photoSlider.css'

import { CastImage } from '../../components'
import { NavigatingButton } from '../../components'
import { movies } from '../../constants/constant'

const PhotoSlider = () => {
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
        <div className='photoSlider'>
            <div className="photoSlider-nav">
                <h4>Cast</h4>
                <NavigatingButton onPrevious={handlePreviousClick} onNext={handleNextClick} />
            </div>
            <div className="photoSlider-list" ref={listRef}>
                {movies.map((movie, index) => <CastImage key={index} data={movie} />)}
            </div>
        </div>
    )
}

export default PhotoSlider