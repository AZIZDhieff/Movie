const FilterMovie = ({ setTextInput }) => {
  return (
    <>
      <input onChange={(e) => setTextInput(e.target.value)} />
    </>
  );
};
export default FilterMovie;
