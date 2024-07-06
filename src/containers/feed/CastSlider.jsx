import React, { useState, useEffect, useRef } from 'react'
import './castSlider.css'

import { CastCard } from '../../components'
import { NavigatingButton } from '../../components'

const CastSlider = ({ movieCredits }) => {
    const [credits, setCredits] = useState([])
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

    useEffect(() => {
        if (movieCredits && movieCredits.cast) {
            const filteredCredits = movieCredits.cast
                .filter(cast => cast.known_for_department === 'Acting' && cast.popularity > 5)
                .sort((a, b) => b.order + a.order);
            setCredits(filteredCredits);
        }
    }, [movieCredits])


    return (
        <div className='castSlider'>
            <div className="castSlider-nav">
                <h4>Cast</h4>
                <NavigatingButton onPrevious={handlePreviousClick} onNext={handleNextClick} />
            </div>
            <div className="castSlider-list" ref={listRef}>
                {
                    credits.map(
                        (cast, index) => <CastCard key={index} data={cast} />
                    )
                }
            </div>
        </div>
    )
}

export default CastSlider
