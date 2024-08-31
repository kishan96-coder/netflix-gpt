import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'


const MainContainer = () => {
    const movies = useSelector(store =>(store.movies?.nowPlayingMovies));

    if(!movies) return;
      const MainMovie = movies[0];
      const {trailer}= MainMovie;
  return (
    <div className='absolute'><VideoTitle movieData={MainMovie}/>
      <VideoBackground trailer={trailer}/></div>
  )
}

export default MainContainer