import axios from "axios";
import { useState } from "react";

export const FetchImages = async () => {
  const [images, setImages] = useState([]);
  try {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=WFZszaTgc3XOPK56UwAq_Bizq-U3CNY9n604h3bbdn4"
    );
    const data = response.data;
    setImages(data);
    console.log(images);
  } catch (error) {
    console.error(error);
  }
};
