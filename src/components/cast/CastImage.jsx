import React from 'react'

import './cast.css'


const CastImage = ({imageURL= 'https://via.placeholder.com/160x174'}) => {
  return (
    <div className='castImage'>
        <img src={imageURL} alt="castImage" />
    </div>
  )
}

export default CastImage