import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import Banner from "./Banner";
import Pay from "./Pay";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div id="app-main">
      {/* <Banner />
      <Home /> */}
      <Pay />
    </div>
  );
}

export default App;
