import { API_OPTIONS, MOVIE_API } from '../utilis/Constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utilis/movieSlice'
import  { useEffect } from 'react'

const useNowPlayingMovie = () => {

    const dispatch = useDispatch();
    
    useEffect(()=>{
      fetchData();
    },[]);
    const  fetchData = async ()=>{
      const data = await fetch(MOVIE_API,API_OPTIONS);
      const datajson = await data.json();
      dispatch(addNowPlayingMovies(datajson.results));
    }
}

export default useNowPlayingMovie;