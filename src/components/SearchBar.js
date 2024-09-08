import { BACKGROUND } from "../utilis/Constant";
import { lang } from "../utilis/languageConstant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { genAI } from "../utilis/openai";
import { addMovieResult, addMovieTitle } from "../utilis/showSearcGptSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/Constant";
const SearchBar = () => {


const searchValue = useRef(null);
const dispatch = useDispatch();
const clickHandler=(e)=>{
 e.preventDefault();
}

const handleInput =async (e)=>{
const searcText = searchValue.current.value;


const query ="Act as a movie Recommendation systems and suggest some movie for the query"+searcText+"only give me names of five movies,in form of comma seperated like the example result is:firstmovie,second";
const promtValue="Suggest five movies seperated by comma in one line";
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const result = await model.generateContent(promtValue + query);
const response = result.response;
const text = response.text();

if(!text){
 console.log("No resilt found");
}
  // text.map(title=>SearchMovieTmdb(title));
const arrayResult = text.split(',');

dispatch(addMovieTitle(arrayResult));
  const SearchMovieTmdb = async(title)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+title+'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json_data = await data.json();
    return json_data.results;
  }
  const PromiseArrayData = arrayResult.map(item=>

    SearchMovieTmdb(item));

 const tmdbResults = await Promise.all(PromiseArrayData);
 dispatch(addMovieResult(tmdbResults));
}
  const langKey = useSelector(langvalue=>(langvalue.config?.lang));
  return (
    <div>
        <div className='fixed -z-10'>
          <img src={BACKGROUND} className="h-screen object-cover md:w-screen"/>
        </div>
        <div className='pt-[50%] flex justify-center md:pt-[10%] p-2'>
            <form className=' bg-black w-full flex grid-cols-12 md:w-1/2' onSubmit={clickHandler}>
                <input type="search"  ref={searchValue} placeholder={lang[langKey].gptSearchPlaceholder} className='border rounded-md border-black bg-white  text-black  md:py-3 md:m-4 py-2 px-2 my-4 mx-2 w-3/4 col-span-9'/>
                <button className='bg-red-500 md:py-3 md:m-4 py-2 px-2 my-4 mx-2  rounded-md text-white col-span-3 w-1/4' onClick={handleInput}>{lang[langKey].search}</button>
            </form>
        </div>

    </div>
  )
}

export default SearchBar;