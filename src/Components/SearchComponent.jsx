import { useState, useEffect } from "react";
import { SearchSuggestion } from "./Search-Suggestions";
import SearchImage from "../Assets/search.png";
import axios from "axios";
export const SearchBar = () => {
  const suggestions = [
    "Street photography",
    "Cute dogs",
    "Wall art",
    "Black and white",
    "Relaxing images",
  ];

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=WFZszaTgc3XOPK56UwAq_Bizq-U3CNY9n604h3bbdn4"
      );
      setImages(response.data[0].urls);
      console.log(images);
    } catch (error) {
      console.error(error);
    }
  };
  const [images, setImages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }, [inputValue]);
  let gridItems = [];
  if (images.length > 0) {
    let gridItems = images.map((gridItem, index) => {
      gridItems = gridItems;
      return (
        <div className="grid-item" key={index}>
          <img src={gridItem.small} alt="" />
        </div>
      );
    });
  }

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
        <button onClick={fetchImages}>{"Search"}</button>
      </div>

      {images.length === 0 ? (
        <div>
          {inputValue === "" ? (
            <img src={SearchImage} alt="" />
          ) : (
            <SearchSuggestion suggestions={filteredSuggestions} />
          )}
        </div>
      ) : (
        <div className="grid-container">{gridItems}</div>
      )}
    </div>
  );
};
