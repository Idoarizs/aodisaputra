import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Experience />
        <Portfolio />

        {/* Custom Background */}
        <div className="w-circle">#</div>
      </main>
    </>
  );
}
