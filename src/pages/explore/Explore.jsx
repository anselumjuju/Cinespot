import React from 'react'
import './explore.css'

import { categories } from '../../constants/constant'
import { MovieLists1 } from '../../containers'

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
      {
        categories.map((category, index) => {
          return (
            <div className='explore-div'>
              <MovieLists1 key={index} data={categories} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Explore