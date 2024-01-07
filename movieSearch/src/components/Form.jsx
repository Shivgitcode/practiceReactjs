import React from "react";
import Input from "./Input";
import Movies from "./Movies";
import { useContext } from "react";
import { MovieContext } from "../context/movieContext";

export default function Form() {
  const { movie } = useContext(MovieContext);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(movie);
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input></Input>
      <Movies></Movies>
      <button>submit</button>
    </form>
  );
}
