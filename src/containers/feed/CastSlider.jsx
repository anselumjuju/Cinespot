import React, { useRef, useEffect } from 'react'
import './castSlider.css'

import { CastCard } from '../../components'
import { NavigatingButton } from '../../components'
import { movies } from '../../constants/constant'

const CastSlider = () => {
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
        <div className='castSlider'>
            <div className="castSlider-nav">
                <h4>Cast</h4>
                <NavigatingButton onPrevious={handlePreviousClick} onNext={handleNextClick} />
            </div>
            <div className="castSlider-list" ref={listRef}>
                {movies.map((movie, index) => <CastCard key={index} data={movie} />)}
            </div>
        </div>
    )
}

export default CastSlider