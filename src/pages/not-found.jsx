import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { ImageCard } from "../Components/Image-card";
export const NotFound = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get reference to the collection
        const querySnapshot = await getDocs(collection(db, "posts"));
        // Map through the documents in the collection
        const docs = querySnapshot.docs.map((doc) => doc.data());
        setData(docs);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="not-found">
        <h1>Firestore Data</h1>
        <ul>
          {data.map((post) => (
            <ImageCard imageUrl={post.imageUrl} caption={post.caption} username={post.username}/>
            // <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
