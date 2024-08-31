import useNowPlayingMovie from '../utilis/useNowPlayingMovie'
import Header from './Header'
import MainContainer from './MainContainer';

const Browse = () => {

useNowPlayingMovie();

  return (
    <div>
   <Header/>
   <MainContainer/>
   {/*
      MainContainer
        - VideoBackground
        - VideoTitle
      SecondryContainer
        - MovieList * n
          - cards * n
   */}
    </div>
  )
}

export default Browse