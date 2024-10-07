import React from 'react'
import { useSelector } from 'react-redux';
import useMoiveTrailer from '../hooks/useMovieTrailer';



const VideoBackground = ({movieId}) => {
    const trailerKey = useSelector((state)=>state.moives?.trailerVideo)

   useMoiveTrailer(movieId);

  return (
    <div className=' overflow-hidden '>
         <iframe autoPlay className='h-screen w-screen ' src={"https://www.youtube.com/embed/"+trailerKey?.key+"?&autoplay=1&loop=1&mute=1"}allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground