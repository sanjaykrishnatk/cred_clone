import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Lenis from "lenis";

function App() {
  // const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
  return (
    <div id="app-main">
      {/* <Banner />
      <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cred-pay" element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;
