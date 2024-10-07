import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({postorPath}) => {
  return (
    <div className='w-[150px] mx-2'>
        <img alt='img-postor' src={IMG_CDN_URL+postorPath}></img>
    </div>
  )
}

export default MovieCard