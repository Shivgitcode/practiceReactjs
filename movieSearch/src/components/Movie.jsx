import React from "react";
import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

export default function Movie({ el }) {
  const { newdata, loading } = useContext(MovieContext);
  return (
    <div>
      {newdata && (
        <div>
          {" "}
          <img src={el.Poster} alt="" />
          <div>
            <h1>{el.Title}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
