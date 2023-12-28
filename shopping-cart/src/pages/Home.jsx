import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

export default function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      let response = await fetch(API_URL);
      let data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (e) {
      console.log("data not found", e);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => {
            return <Product key={post.id} post={post}></Product>;
          })}
        </div>
      ) : (
        <div>
          <p>No Data found</p>
        </div>
      )}
    </div>
  );
}
