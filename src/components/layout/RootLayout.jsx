import React from "react";
import { Outlet } from "react-router-dom";
import NewQuotePage from "../pages/NewQuote.page";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Hero from "../shared/Hero";
const RootLayout = () => {
  return (
    <section>
      <Header />
      <div className="grid grid-cols-2">
        <NewQuotePage />
        <section>
          <Hero />
          <Outlet />
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};
export default RootLayout;
