import React from "react";
import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

export default function Input() {
  const { movie, setMovie } = useContext(MovieContext);

  function handleChange(e) {
    setMovie(e.target.value);
  }

  return (
    <div>
      <input type="text" name="movie" value={movie} onChange={handleChange} />
    </div>
  );
}
