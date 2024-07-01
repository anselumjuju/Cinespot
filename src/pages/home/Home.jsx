import React from 'react'
import './home.css'

import { HeroSlider, TrendingCards, MovieLists2 } from '../../containers'
import { SecondaryButton } from '../../components'

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

      <div className="home_section2 margin-tb">
        {['Trending', 'Popular', 'Upcoming'].map(
          (category, index) => {
            return (
              <div className='home_section2-div'>
                <MovieLists2 key={index} title={category} />
                <SecondaryButton text='Explore' />
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Home