import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className=" absolute h-screen w-screen bg-gradient-to-r from-black bg-opacity-5 z-0">
      <div className=' absolute w-1/3 mt-56 ml-10 z-40 text-white bg-gradient-to-r from-black bg-opacity-35'>
        <h1 className='text-4xl font-bold my-5'>{title}</h1>
        <p className='font-bold my-5' >{overview}</p>
        <div>
            <button className='w-28 m-5 bg-white text-black text-xl p-1 rounded-lg border-none hover:bg-opacity-60'>▶ Play</button>
            <button className=' w-40 m-5 bg-gray-500 text-white text-xl p-1 rounded-lg border-none'>More Info</button>
        </div>
    </div>
    </div>
  )
}

export default VideoTitle