import { MOVIE_API } from '../utilis/Constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utilis/movieSlice'
import React, { useEffect } from 'react'

const useNowPlayingMovie = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
      fetchData();
    },[]);
    const  fetchData = async ()=>{
      const data = await fetch(MOVIE_API);
      const datajson = await data.json();
      dispatch(addNowPlayingMovies(datajson));
    }
}

export default useNowPlayingMovie;