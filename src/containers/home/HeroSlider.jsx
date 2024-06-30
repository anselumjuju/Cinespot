import React, { useState, useEffect } from 'react'
import './heroSlider.css'

import { Slider } from '../../cards'
import { slides } from '../../constants/constant'

const HeroSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
      console.log('slide' + JSON.stringify(slides[currentIndex]))
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="heroSlider">

      <Slider data={slides[currentIndex]} />


      <div className="slider-navigation">
        <button onClick={goToPrevious}>&#10094;</button>
        <div className="slider-indicators">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
        <button onClick={goToNext}>&#10095;</button>
      </div>
    </div>
  )
}

export default HeroSlider