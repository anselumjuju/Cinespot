import React from 'react'
import './explore.css'

import { categories } from '../../constants/constant'
import { SecondaryButton } from '../../components'
import { MovieLists2 } from '../../containers'

const Explore = () => {
  return (
    <div className='explore margin-tb'>
      <div className="explore-nav">
        {
          categories.map((category, index) => {
            return (
              <p key={index}>{category}</p>
            )
          })
        }
      </div>
      <div className="explore-movies">
        {
          categories.map((category, index) => {
            return (
              <div className='explore-div'>
                <MovieLists2 key={index} text={category} />
                <SecondaryButton text='Explore' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Explore