import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {

  return (
    <div className="px-6 bg-opacity-80">
        <h1 className="text-3xl py-2 text-white">{title}</h1>
        <div  className="flex overflow-x-scroll snap-x snpa-y flex-nowwrap">
            <div className="flex">
                {movies?.map((path)=>
                <MovieCard key ={path.id} posterImg={path.poster_path} />
                )}
            </div>
        </div>
    </div>
  )
};
export default MovieList