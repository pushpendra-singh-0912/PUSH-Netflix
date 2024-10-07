import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoiveTrailer = (movieId)=>{
    const dispatch = useDispatch()
    // fetch trailer video and updating the store 

    const getMovieVideo = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/' +movieId+'/videos?language=en-US', API_OPTIONS);
    const json = await data.json()
    // console.log(json);
    const trailer = json.results.filter((video)=> video.name=='Official Trailer');
    // console.log(trailer[0]);
    dispatch(addTrailerVideo(trailer[0]));
    
    } 

    useEffect(()=>{
        getMovieVideo()
    },[])
};

export default useMoiveTrailer;