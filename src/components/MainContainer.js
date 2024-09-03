import SecondryContainer from './SecondryContainer';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle'
import { useSelector} from 'react-redux';
const MainContainer = () => {
    const movies = useSelector(store =>(store.movies?.nowPlayingMovies));

    if(!movies) return;
      const MainMovie = movies[0];
       const {id}= MainMovie
  return (
    <div className='absolute'><VideoTitle movieData={MainMovie}/>
      <VideoBackground movieId={id}/>
      <SecondryContainer/>
      </div>
  
  )
}

export default MainContainer