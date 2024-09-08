import { API_OPTIONS, MOVIE_API } from '../utilis/Constant'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utilis/movieSlice'
import  { useEffect } from 'react'

const useNowPlayingMovie = () => {
    const nowPlayingMovies = useSelector(nowPlayMovies=>nowPlayMovies?.movies?.nowPlayingMovies);
    const dispatch = useDispatch();
    
    useEffect(()=>{
      (!nowPlayingMovies)&&fetchData();
    },[]);
    const  fetchData = async ()=>{
      const data = await fetch(MOVIE_API,API_OPTIONS);
      const datajson = await data.json();
      dispatch(addNowPlayingMovies(datajson.results));
    }
}

export default useNowPlayingMovie;