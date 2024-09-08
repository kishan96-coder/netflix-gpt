import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
  return (
    <div className="bg-opacity-80 bg-black pl-3 md:pl-5 md:pr-5 right-0 left-0">
        <h1 className="text-lg py-2 text-white md:text-3xl">{title}</h1>
        <div  className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-smooth md:snap-x md:snap-mandatory md:flex-nowrap">
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