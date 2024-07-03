import React from 'react'
import './cast.css'

import { CastImage } from '..'

const CastCard = ({ data }) => {

  const {
    imageURL = "https://via.placeholder.com/174x225",
    movieName = "Movie Name",
    originalName = "Original Name"
  } = data

  return (
    <div className='castCard'>
      <CastImage imageURL={imageURL} />
      <p className='castCard-movieName'>{movieName}</p>
      <p className='castCard-originalName'>{originalName}</p>
    </div>
  )
}


export default CastCard
