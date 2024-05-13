import { useState, useEffect } from "react";
import SearchImage from "../Assets/search.png";
import "./Search.css";
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
  let mappedSuggestions = filteredSuggestions.map((mappedSuggestion, index) => {
    return (
      <p
        key={index}
        onClick={() => {
          setInputValue(mappedSuggestion);
          console.log(inputValue);
        }}
      >
        {mappedSuggestion}
      </p>
    );
  });
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Nature"
          autoComplete="on"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>{"Search"}</button>
      </div>
      <div>
        {inputValue === "" ? (
          <img src={SearchImage} alt="" />
        ) : (
          <div className="search-suggestions">{mappedSuggestions}</div>
        )}
      </div>
    </div>
  );
};
