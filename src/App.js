import { useState } from "react";
import AddMovie from "./AddMovie";
import "./App.css";
import { moviesData } from "./movieData";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovie] = useState(moviesData);

  const addMovie = (newMovie) => {
    setMovie([...movies, newMovie]);
  };
  return (
    <div className="wrapper">
      <MovieList movies={movies} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;
