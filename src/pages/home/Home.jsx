import React from 'react'
import './home.css'

import { HeroSlider, TrendingCards } from '../../containers'

const Home = () => {
  return (
    <div className='home'>
      <div className="home_section1 margin-tb">
        <HeroSlider />
        {/* <TrendingCards /> */}
      </div>
    </div>
  )
}

export default Home