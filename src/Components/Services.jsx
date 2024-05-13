import axios from "axios";
export const fetchImages = async () => {
  try {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=WFZszaTgc3XOPK56UwAq_Bizq-U3CNY9n604h3bbdn4"
    );
    // setImages(response.data[0].urls);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
