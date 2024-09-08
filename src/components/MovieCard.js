import { IMGAE_API } from "../utilis/Constant"

const MovieCard = ({posterImg}) => {
  if(!posterImg) return null;  
  return (
    <div>
        <div className="pr-5 w-28 snap-always snap-center md:w-32 md:snap-always md:snap-center">
        <img alt="movie card "src={IMGAE_API+posterImg} />
        </div>

    </div>
  )
}

export default MovieCard