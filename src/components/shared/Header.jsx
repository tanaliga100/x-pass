/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <section className=" flex flex-row items-center gap-10  bg-slate-200 sticky top-0 z-10">
      <div className="text-black text-lg font-bold p-1 "> {props.title}</div>
      <div className="text-black text-xs"> {props.subtitle}</div>
    </section>
  );
};
export default Header;
