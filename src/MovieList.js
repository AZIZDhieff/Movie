import MovieCard from "./MovieCard";
const MovieList = ({ movies, textInput }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movies
        .filter((el) => el.name.includes(textInput))
        .map((el) => (
          <MovieCard el={el} />
        ))}
    </div>
  );
};
export default MovieList;
