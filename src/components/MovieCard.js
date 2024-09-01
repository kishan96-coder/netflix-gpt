import { IMGAE_API } from "../utilis/Constant"

const MovieCard = ({posterImg}) => {
  return (
    <div>
        <div className="w-32 pr-4">
        <img alt="movie card "src={IMGAE_API+posterImg} />
        </div>

    </div>
  )
}

export default MovieCard