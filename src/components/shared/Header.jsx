/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <section className=" justify-start px-3 flex flex-col items-left text-left font-extrabold sticky top-0 z-10 pb-5 ">
      <div className=" text-xl font-extrabold font-sans"> {props.title}</div>
      <span className=" font-thin  font-sans text-xs"> {props.subtitle}</span>
    </section>
  );
};
export default Header;
