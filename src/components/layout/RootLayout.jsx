import React from "react";
import { Outlet } from "react-router-dom";
import NewQuotePage from "../pages/NewQuote.page";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Hero from "../shared/Hero";
const RootLayout = () => {
  return (
    <div className="max-h-80">
      <header>
        <Header />
      </header>
      <main className="flex flex-row">
        {/* LEFT */}
        <section className="basis-1/3">
          <NewQuotePage />
        </section>
        {/* RIGHT */}
        <section className="basis-full">
          <Hero />
          <Outlet />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default RootLayout;
