import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utilis/movieSlice';

const VideoBackground = ({trailerData}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const dispatch = useDispatch();
  dispatch(addTrailerVideo(trailerData));

  return (
    <div className='w-screen'>
       <iframe 
       className='w-screen aspect-video'
       src="https://www.youtube.com/embed/gzeaGcLLl_A?si=BSKKxocDiJEU8sxt?&autoplay=1&mute=1" 
       title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  )
}

export default VideoBackground