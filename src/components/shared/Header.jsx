/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <section className=" flex flex-row items-center font-extrabold sticky top-0 z-10">
      <div className="text-black text-lg font-bold  "> {props.title}</div>
      <div className="text-black text-xs"> {props.subtitle}</div>
    </section>
  );
};
export default Header;
