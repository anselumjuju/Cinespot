import React from 'react'
import './explore.css'

import { useNavigate } from 'react-router-dom'

import { genres } from '../../constants/constant'
import { SecondaryButton } from '../../components'
import { MovieLists2 } from '../../containers'

const Explore = () => {
  const navigate = useNavigate()
  return (
    <div className='explore margin-tb'>
      <div className="explore-nav">
        {
          genres.map((genre, index) => {
            return (
              <p
                key={index}
                onClick={()=>{
                  navigate(`/search?genre=${(genre.name).toLowerCase()}`)
                }}
              >{genre.name}</p>
            )
          })
        }
      </div>
      <div className="explore-movies">
        {
          genres.map((genre, index) => {
            return (
              <div className='explore-div' key={index}>
                <MovieLists2 text={genre.name} />
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