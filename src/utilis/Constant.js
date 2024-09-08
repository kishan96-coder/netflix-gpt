export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg";

export const MOVIE_API = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'";
export const POPULAR_MOVIE_API = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED_MOVIE_API = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING_MOVIE_API = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const MOVIE_BY_TITLE_API="https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer'+process.env.REACT_APP_TMDB_API,
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTIxZTM1OWJjYzFlMTQzMzg3ZjkyYWIxZjgxY2ViMSIsIm5iZiI6MTcyNTEyNjU5MS42NjU2ODEsInN1YiI6IjY2ZDM1NjMzMzljN2YyMzNlMDk0NTI5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b8HoAr8fHOv92x1YZe6RadeB3bsMGn919SHjrD0umFc'
    }
  };


export const IMGAE_API="https://image.tmdb.org/t/p/w500/";

export const language = [
  {identifier:"en",name:"English"},
  {identifier:"es",name:"Spanish"},
  {identifier:"hi",name:"Hindi"},
  {identifier:"jp",name:"Japanese"},
]
