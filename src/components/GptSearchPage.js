import SearchBar from "./SearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { useSelector } from 'react-redux';


const GptSearchPage = () => {
  return (
  <div className="overflow-x-clip overflow-y-hidden">
    <SearchBar/>
    <GptMovieSuggestions/>
  </div>
  )
}

export default GptSearchPage;