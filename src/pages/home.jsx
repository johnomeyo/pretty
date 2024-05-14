import "../Components/Grid.css";
import axios from "axios";
import { useState, useEffect } from "react";
export const Home = () => {
  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=WFZszaTgc3XOPK56UwAq_Bizq-U3CNY9n604h3bbdn4"
      );
      const data = response.data;
      setImages((prevImages) => [...prevImages, ...data]);
      console.log(images);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  let gridItems = images.map((image) => {
    return (
      <div className="grid-item" >
        {images.length > 0 && (
          <img loading="lazy" src={image.urls.small} alt="" />
        )}
      </div>
    );
  });
  return (
    <>
      <div className="grid-container">{gridItems}</div>
    </>
  );
};
