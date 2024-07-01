import React from 'react'
import './home.css'

import { HeroSlider, TrendingCards } from '../../containers'

const Home = () => {
  return (
    <div className='home'>
      <div className="home_section1 margin-tb">
        <div className="home_section1-div1">
          <HeroSlider />
        </div>
        <div className="home_section1-div2">
          <TrendingCards />
        </div>
      </div>
    </div>
  )
}

export default Home