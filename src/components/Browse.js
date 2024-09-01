import usePopular from '../hooks/usePopular';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import useNowPlayingMovie from '../utilis/useNowPlayingMovie'
import Header from './Header'
import MainContainer from './MainContainer';

const Browse = () => {

useNowPlayingMovie();
useUpcoming();
useTopRated();
usePopular();

  return (
    <div>
   <Header/>
   <MainContainer/>
    </div>
  )
}

export default Browse