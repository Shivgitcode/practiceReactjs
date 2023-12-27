import React from "react";
import { useState } from "react";

export default function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);

  async function fetchProductData() {
    setLoading(true);

    try {
      let response = await fetch(API_URL);
      let data = await response.json();
      console.log(data);
    } catch (e) {
      console.log("data not found", e);
    }
  }

  async;
  return <div>Home</div>;
}
