import { API_OPTIONS ,POPULAR_MOVIE_API} from '../utilis/Constant';
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utilis/movieSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
const usePopular = () => {
  // const popularMovie = useSelector(popMovie=>popMovie.);
  const  popularMovie  = useSelector( popularMovie =>popularMovie?.movies?.PopularMovies);
  const dispatch = useDispatch();
  useEffect(()=>{
    (!popularMovie)&&fetchData();
  },[]);
  const  fetchData = async ()=>{
    const data = await fetch(POPULAR_MOVIE_API,API_OPTIONS);
    const datajson = await data.json();
    dispatch(addPopularMovies(datajson.results));
  }
}

export default usePopular;