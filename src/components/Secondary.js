import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondary = () => {
  const movies = useSelector((store)=>store.moives);
 
  return (
    <div className='-mt-60' >
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMoives} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMoives} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMoives} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMoives} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMoives} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMoives} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMoives} />
    </div>
  )
}

export default Secondary