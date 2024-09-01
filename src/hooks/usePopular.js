import { API_OPTIONS ,POPULAR_MOVIE_API} from '../utilis/Constant';
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utilis/movieSlice'
import { useEffect } from 'react'


const usePopular = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    fetchData();
  },[]);
  const  fetchData = async ()=>{
    const data = await fetch(POPULAR_MOVIE_API,API_OPTIONS);
    const datajson = await data.json();
    dispatch(addPopularMovies(datajson.results));
  }
}

export default usePopular;