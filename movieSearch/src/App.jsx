import { useContext } from "react";
import "./App.css";
import { MovieContext } from "./context/MovieContext";
import { useEffect } from "react";
import Form from "./components/Form";

function App() {
  const { movie, getMovieData, newdata } = useContext(MovieContext);
  useEffect(() => {
    getMovieData();
  }, [movie]);
  console.log(movie);

  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;
