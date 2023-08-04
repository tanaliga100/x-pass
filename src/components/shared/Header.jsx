import React from "react";
import { Link } from "react-router-dom";
// import logotrans from "../../assets/logo-trans.png";

const Header = () => {
  return (
    <section className="  bg-emerald-950 brightness-200 p-6">
      <main className="text-2xl font-black text-white  ">
        <Link to="/">Quotivate</Link>
      </main>
      <small className=" font-normal text-white">
        Make a notable lyrics of a song...
      </small>
    </section>
  );
};

export default Header;
