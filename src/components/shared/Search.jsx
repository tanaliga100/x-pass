const Search = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const handleChange = (e) => {};
  return (
    <input
      className="border-2 border-emerald-500w-3/4 text-left focus:ring-0  p-3 rounded-lg text-emerald-500 w-full my-3"
      onChange={handleChange}
      // eslint-disable-next-line react/prop-types
      placeholder={props.placeholder}
    />
  );
};
export default Search;
