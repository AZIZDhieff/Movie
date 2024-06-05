import { useState } from "react";
import AddMovie from "./AddMovie";
import "./App.css";
import FilterMovie from "./FilterMovie";
import { moviesData } from "./movieData";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovie] = useState(moviesData);
  const [textInput, setTextInput] = useState("");

  const addMovie = (newMovie) => {
    setMovie([...movies, newMovie]);
  };
  return (
    <div className="wrapper">
      <FilterMovie setTextInput={setTextInput} />
      <MovieList movies={movies} textInput={textInput} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;
