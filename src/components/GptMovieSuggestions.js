import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

const movieSuggestionTitle = useSelector((movie)=>movie?.search?.movieTitle);
const movies = useSelector((movie)=>movie?.search?.movieAiResult);
if(movies==null){
  return;
}
  return (
    <div className='pt-10'>
      {movies.map((moviesitem,index)=><MovieList key={index} title={movieSuggestionTitle[index]} movies={moviesitem}/>)}
    </div>
  )
}

export default GptMovieSuggestions