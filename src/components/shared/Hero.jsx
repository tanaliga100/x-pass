import React from "react";
import { BsListStars } from "react-icons/bs";

const Hero = () => {
  const activeClass = {
    color: "red",
  };

  return (
    <section className="text-lg p-3 mt-3 font-bold w-auto text-center bg-gray-200 flex  float-none  place-items-center gap-5 justify-start">
      <span>
        <BsListStars size={30} />
      </span>
      <h1>Your Quotivate</h1>
      <button className="hover:bg-emerald-950 border-emerald-900 border-2 text-emerald-950 text-sm  brightness-200 font-bold hover:text-white py-1 px-3">
        Sort
      </button>
    </section>
  );
};
export default Hero;
