const Search = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const handleChange = (e) => {};
  return (
    <input
      className="border-2 border-emerald-500w-3/4 text-left focus:ring-1  font-bold p-1 rounded-lg text-emerald-500 w-full "
      onChange={handleChange}
      // eslint-disable-next-line react/prop-types
      placeholder={props.placeholder}
    />
  );
};
export default Search;
