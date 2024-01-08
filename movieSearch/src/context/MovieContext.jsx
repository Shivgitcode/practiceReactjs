import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const MovieContext = createContext();

export function MovieContextData({ children }) {
  const [movie, setMovie] = useState("spiderman");
  const [loading, setLoading] = useState(true);
  const [newdata, setNewdata] = useState([]);
  // const { mydata, setMyData } = useState([""]);
  let mydata = [];

  async function getMovieData() {
    setLoading(true);
    const url = `http://www.omdbapi.com/?s=${movie}&apikey=57753720`;
    const response = await axios.get(url);
    const data = await response.data.Search;
    if (data === undefined) {
      setLoading(true);
    }
    console.log(data);
    mydata = data;
    setNewdata(mydata);
    console.log(mydata);

    setLoading(false);
  }

  const value = {
    movie,
    setMovie,
    getMovieData,
    newdata,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
