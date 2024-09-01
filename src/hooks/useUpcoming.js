import { API_OPTIONS,UPCOMING_MOVIE_API} from '../utilis/Constant'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utilis/movieSlice'
import { useEffect } from 'react'


const useUpcoming = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
      fetchUpcomingData();
    },[]);
    const  fetchUpcomingData = async ()=>{
      const data = await fetch(UPCOMING_MOVIE_API,API_OPTIONS);
      const datajson = await data.json();
      dispatch(addUpcomingMovies(datajson.results));
    }
}

export default useUpcoming;