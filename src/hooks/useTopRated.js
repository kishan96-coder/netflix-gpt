import { API_OPTIONS, TOP_RATED_MOVIE_API } from '../utilis/Constant'
import { useDispatch } from 'react-redux'
import { addTopRatedrMovies } from '../utilis/movieSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
const useTopRated = () => {
  const  TopRatedMovie  = useSelector(TopRatedMovie =>TopRatedMovie?.movies?.TopRatedrMovies);
    const dispatch = useDispatch();
    useEffect(()=>{
      (!TopRatedMovie)&&fetchData();
    },[]);
    const  fetchData = async ()=>{
      const data = await fetch(TOP_RATED_MOVIE_API,API_OPTIONS);
      const datajson = await data.json();
      dispatch(addTopRatedrMovies(datajson.results));
    }
}

export default useTopRated ;