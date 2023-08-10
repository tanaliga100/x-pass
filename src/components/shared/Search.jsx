const Search = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <input
      className="border-2 border-emerald-500 focus:ring-0 p-1 rounded-lg"
      onChange={handleChange}
      // eslint-disable-next-line react/prop-types
      placeholder={props.placeholder}
    />
  );
};
export default Search;
