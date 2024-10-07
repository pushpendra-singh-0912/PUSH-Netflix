import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import Secondary from './Secondary'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
const showGptSearch = useSelector(store => store.gpt.showGptSearch)



 // fetching now playig moveie and put in store
useNowPlayingMovies()

  return (
    <div className='relative'>
      <Header/>
     {
      (showGptSearch)?<GptSearch/>:<><MainContainer/>  <Secondary/>  </>
     }
    </div>
  )
}

export default Browse