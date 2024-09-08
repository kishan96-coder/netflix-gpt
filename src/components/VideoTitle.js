
const VideoTitle = ({movieData}) => {

const {title,overview}= movieData
  return(
  <div>
    <div className='absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <div className="pt-[15%] px-6 md:px-12">
            <div className='w-1/4 md:mx-10 md:pt-10'>
                <p className='text-xl font-bold md:text-4xl'>
                    {title}
                </p>
                <p  className='hidden pt-5 md:inline-block'>
                    {overview}
                </p>
            </div>
            <div className='pt-5 md:mx-10 flex'>
                <button className='bg-white  px-4 py-1  md:py-3 md:px-1 md:w-32 rounded-lg text-black font-bold hover:bg-opacity-80 '>
                    Play
                </button>
                <button className='hidden md:inline-block mx-2 bg-gray-500 px-4 py-3 w-32 rounded-lg text-white font-bold'>
                    More info
                </button>
            </div>
        </div>
    </div>
</div>
)};

export default VideoTitle;