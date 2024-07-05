import React, { useState, useEffect } from 'react'
import './heroSlider.css'

import { Slider } from '../../cards'
import { NavigatingButton } from '../../components'
import { fetchTopMovies } from '../../api/fetchData'

const HeroSlider = () => {
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? fetchedMovies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === fetchedMovies.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);


    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  useEffect(() => {
    async function fetchData() {
      let fetchedMovies = await fetchTopMovies(4);
      setFetchedMovies(fetchedMovies);
    }
    fetchData()
  }, []);

  return (
    <div className="heroSlider">

      <Slider data={fetchedMovies[currentIndex]} />

      <div className="slider-navigation">
        <div className="slider-indicators">
          {fetchedMovies.map((slide, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <NavigatingButton onPrevious={goToPrevious} onNext={goToNext} />
      </div>
    </div>
  )
}

export default HeroSlider