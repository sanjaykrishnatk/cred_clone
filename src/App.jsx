import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import Banner from "./Banner";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div id="app-main">
      <Banner />
      <Home />
    </div>
  );
}

export default App;
