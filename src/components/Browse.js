import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import useNowPlayingMovie from '../utilis/useNowPlayingMovie'
import Header from './Header'
import MainContainer from './MainContainer';
import GptSearchPage from './GptSearchPage';
import { useSelector} from 'react-redux';
const Browse = () => {
  const showSearch = useSelector(store=>store.search?.ShowSearch);

useNowPlayingMovie();
useUpcoming();
useTopRated();
usePopular();

  return (
    <div>
   <Header/>
   {showSearch?<GptSearchPage/>:<MainContainer/>}
    </div>
  )
}

export default Browse;