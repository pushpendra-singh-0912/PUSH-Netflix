import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    if(!movies) return null;
    // console.log(movies)
  return (
    <div className=' relative my-4 text-white pl-5 z-[100]  bg-black'>
        <h1 className='text-3xl' >{title}</h1>

        <div className='flex  mt-5 overflow-x-scroll  z-50'>
            <div className='flex'>
            {
                movies.map((movie,index)=><MovieCard key={index} postorPath={movie.poster_path} />)
            }
            </div>
        </div>
        
    </div>
  )
}

export default MovieList