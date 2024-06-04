import MovieCard from "./MovieCard";
const MovieList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {props.movies.map((el) => (
        <MovieCard el={el} />
      ))}
    </div>
  );
};
export default MovieList;
