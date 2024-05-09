import { SearchBar } from "../Components/SearchComponent";
import "../Components/Search.css";

export const Search = () => {
  return (
    <div className="search-page">
      <h3>{"Search for quality images"}</h3>
      <div className="padding-div"></div>
      <SearchBar />
    </div>
  );
};
