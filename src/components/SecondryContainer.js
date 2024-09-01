import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondryContainer = () => {

  const movies = useSelector(store=>store.movies?.nowPlayingMovies);
  
  const Popular = useSelector(store=>(store.movies.PopularMovies));
  const Upcoming = useSelector(store=>store.movies?.UpcomingMovies);
  
  const TopRated= useSelector(store=>(store.movies?.TopRatedrMovies));

  return (
    <div className=' bg-black'>
      <div className=' -mt-24 pl-12  relative z-30'>
      <MovieList title ={"Now Playing"} movies={movies}/>
      <MovieList title ={"Popular Movies"} movies={Popular}/>
      <MovieList title ={"Upcoming Movies"} movies={Upcoming}/>
      <MovieList title ={"Top Rated"} movies={TopRated}/>
      </div>
  </div>
  )
}

export default SecondryContainer