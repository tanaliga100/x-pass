/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <section className=" px-3 flex flex-col items-left text-left font-extrabold sticky top-0 z-10 ">
      <div className=" text-white/70 text-xl font-bold font-mono ">
        {" "}
        {props.title}
      </div>
      <span className=" font-thin  font-mono text-xs"> {props.subtitle}</span>
    </section>
  );
};
export default Header;
