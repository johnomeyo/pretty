// import React, { useEffect, useState } from "react";
// import { db } from "../firebase-config";
// import { collection, getDocs } from "firebase/firestore";
// import { ImageCard } from "../Components/Image-card";
import { useNavigate } from "react-router-dom";
import "../Components/Not-Found.css";
export const NotFound = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState([]);
  const handleButtonClick = () => {
    navigate("/");
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Get reference to the collection
  //       const querySnapshot = await getDocs(collection(db, "posts"));
  //       // Map through the documents in the collection
  //       const docs = querySnapshot.docs.map((doc) => doc.data());
  //       setData(docs);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    // <>
    //   <div className="not-found">
    //     <h1>Firestore Data</h1>
    //     <ul>
    //       {data.map((post) => (
    //         <ImageCard imageUrl={post.imageUrl} caption={post.caption} username={post.username}/>
    //         // <li key={index}>{JSON.stringify(item)}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </>
    <div className="not-found">
      <h1>{"404"}</h1>
      <h4>{"Sorry, we couldn't find this page"}</h4>
      <button onClick={handleButtonClick}>Back to homepage</button>
    </div>
  );
};
