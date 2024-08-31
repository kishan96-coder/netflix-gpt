
const VideoTitle = ({movieData}) => {
const {title,plot,trailer}= movieData
  return(
  <div>
    <div className='absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <div className="pt-[15%] px-12">
    <div className='pt-10 w-1/4 mx-10'>
        <p className='text-4xl font-bold'>
            {title}
        </p>
        <p  className='pt-5'>{plot}</p>
    </div>
    <div className='pt-5 mx-10'>
        <button className='bg-white px-4 py-3 w-32 rounded-lg text-black font-bold hover:bg-opacity-80'>Play</button>
        <button className='mx-2 bg-gray-500 px-4 py-3 w-32 rounded-lg text-white font-bold'>More info</button>
    </div>
    </div>
</div>
</div>
)};

export default VideoTitle;