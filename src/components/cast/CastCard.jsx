import React from 'react'
import './cast.css'

import { CastImage } from '..'

const CastCard = ({ data }) => {

  const {
    profilePath = data.profile_path ? `https://image.tmdb.org/t/p/h632/${data.profile_path}` : 'https://via.placeholder.com/174x225',
    movieName = data.character,
    originalName = data.name
  } = data

  return (
    <div className='castCard'>
      <CastImage imageURL={profilePath} />
      <p className='castCard-movieName'>{originalName}</p>
      <p className='castCard-originalName'>{movieName}</p>
    </div>
  )
}


export default CastCard
