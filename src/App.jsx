import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import Banner from "./Banner";
import Pay from "./Pay";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
function App() {
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
