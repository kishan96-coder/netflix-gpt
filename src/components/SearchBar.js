import { BACKGROUND } from "../utilis/Constant";
import { lang } from "../utilis/languageConstant";
import { useSelector } from "react-redux";

const SearchBar = () => {

    const langKey = useSelector(langvalue=>(langvalue.config?.lang));
  return (
    <div>
        <div className="overflow-hidden ">
          <img src={BACKGROUND} className='absolute -z-10 '/>
        </div>
        <div className='pt-[10%] flex justify-center'>
            <form className=' bg-black w-1/2 flex grid-cols-12'>
                <input type="search" placeholder={lang[langKey].gptSearchPlaceholder} className='border rounded-md border-black bg-white  text-black p-4 m-4 w-3/4 col-span-9'/>
                <button className='bg-red-500 py-4 px-4 m-4 rounded-md text-white col-span-3 w-1/4'>{lang[langKey].search}</button>
            </form>
        </div>

    </div>
  )
}

export default SearchBar;