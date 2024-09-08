import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utilis/movieSlice';
import { API_OPTIONS } from '../utilis/Constant';


const VideoBackground = ({movieId}) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store =>(store.movies.trailerVideo));

  useEffect(()=>{
    (!trailerVideo)&& movieTrailer();
  },[])

  const movieTrailer = async()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId +"/videos",API_OPTIONS);
    const jsonMovieData = await data.json();
    const movieVideo = jsonMovieData.results.filter((item)=>item.type==='Teaser');

    const trailer = movieVideo.length ? movieVideo[0]:jsonMovieData.results[0];
    const trailerId = trailer.key;
if(trailerId){
  dispatch(addTrailerVideo(trailerId));
  }}


return (
    <div className='overflow-hidden'>
       <iframe 
       className='w-screen aspect-video'
       src={"https://www.youtube.com/embed/" +trailerVideo+ "?&autoplay=1&mute=1"}
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  )
}

export default VideoBackground