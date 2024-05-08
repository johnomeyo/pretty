import { useState, useEffect } from "react";
import { SearchSuggestion } from "./Search-Suggestions";
import SearchImage from "../Assets/search.png";
export const SearchBar = () => {
  const suggestions = [
    "Street photography",
    "Cute dogs",
    "Wall art",
    "Black and white",
    "Relaxing images",
  ];

  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }, [inputValue]);
  return (
    <div className="search-container">
      <div className="search-bar">
        <form action="">
          <input
            type="text"
            name="search"
            placeholder="Nature"
            autoComplete="on"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">{`Search ${inputValue}`}</button>
        </form>
      </div>
      {inputValue === "" ? (
        <img src={SearchImage} alt="" />
      ) : (
        <SearchSuggestion suggestions={filteredSuggestions} />
      )}
    </div>
  );
};
