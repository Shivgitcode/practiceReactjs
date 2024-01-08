import React from "react";
import { useContext } from "react";
import { MovieContext } from "../context/movieContext";
import Movie from "./Movie";
import { useEffect } from "react";

export default function Movies() {
  const { loading, getMovieData, newdata } = useContext(MovieContext);
  const data = newdata;
  console.log(data, "heyyy");
  return (
    <div>
      {loading
        ? "loading..."
        : data.map((el) => {
            return <Movie el={el}></Movie>;
          })}
    </div>
  );
}
