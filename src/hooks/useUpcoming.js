import { API_OPTIONS,UPCOMING_MOVIE_API} from '../utilis/Constant'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utilis/movieSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const useUpcoming = () => {
  const  upcomingMovie = useSelector( upcomingMovie =>upcomingMovie?.movies?.UpcomingMovies);
    const dispatch = useDispatch();
    useEffect(()=>{
      (!upcomingMovie)&&fetchUpcomingData();
    },[]);
    const  fetchUpcomingData = async ()=>{
      const data = await fetch(UPCOMING_MOVIE_API,API_OPTIONS);
      const datajson = await data.json();
      dispatch(addUpcomingMovies(datajson.results));
    }
}

export default useUpcoming;