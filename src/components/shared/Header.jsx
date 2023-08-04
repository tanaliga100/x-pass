import React from "react";
import { Link } from "react-router-dom";
// import logotrans from "../../assets/logo-trans.png";

const Header = () => {
  return (
    <section className=" bg-slate-950  p-6">
      <main className="text-3xl font-light  text-white  ">
        <Link to="/">Quotivate</Link>
      </main>
      <small className=" font-bold text-white/40">
        Make a notable lyrics of a song...
      </small>
    </section>
  );
};

export default Header;
