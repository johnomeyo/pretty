import { useState, useEffect } from "react";
import SearchImage from "../Assets/search.png";
import axios from "axios";
import "./Search.css";
import "./Grid.css";
import { ModalComponent } from "./ModalComponent";
export const SearchBar = () => {
  const suggestions = [
    "Street photography",
    "Cute dogs",
    "Wall art",
    "Black and white",
    "Relaxing images",
  ];
  //filter such suggestions
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
        }}
      >
        {mappedSuggestion}
      </p>
    );
  });
  //handle the modal for viewing the image

  const [toggleModal, setToggleModal] = useState(false);
  const handleModalChange = () => {
    setToggleModal(true);
    console.log("the image is clicked" + toggleModal);
  };
  // search for images
  const [images, setImages] = useState([]);
  const searchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=F00UCpYu88LP7MuIWVdSHaf8gM3udxMOEo6QMHwZNzc&query=${inputValue}`
      );
      const data = response.data.results;
      setImages(data);
    } catch (e) {
      console.log(`An error ${e} occured`);
    }
  };
  let mappedSearchResults = images.map((mapppedSearchResult) => {
    return (
      <div className="grid-item">
        {images.length > 0 && (
          <img
            loading="lazy"
            src={mapppedSearchResult.urls.small}
            alt=""
            onClick={handleModalChange}
          />
        )}
      </div>
    );
  });
  return (
    <>
      {toggleModal && <ModalComponent closeModal={setToggleModal} />}
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Nature"
            autoComplete="on"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={searchImages}>{"Search"}</button>
        </div>
        {images.length === 0 ? (
          <div>
            {inputValue === "" ? (
              <img src={SearchImage} alt="" />
            ) : (
              <div className="search-suggestions">{mappedSuggestions}</div>
            )}
          </div>
        ) : (
          <div className="grid-container">{mappedSearchResults}</div>
        )}
      </div>
    </>
  );
};
