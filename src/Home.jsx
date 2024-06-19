import React from "react";
import videoBg from "./assets/hero-desktop.mp4";
import mobileBg from "./assets/hero-mobile.mp4";
import Menu from "./Menu";
import Banner from "./Banner";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";
import Section_5 from "./Section_5";
import Section_6 from "./Section_6";
import Section_7 from "./Section_7";
import Section_8 from "./Section_8";
import Section_9 from "./Section_9";
import Section_10 from "./Section_10";
import Footer from "./Footer";
import Pay from "./Pay";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  return (
    <div className="main">
      <Banner id="banner-container" />
      {!isMobile && (
        <video className="bgVideo w-100" muted autoPlay loop>
          <source src={videoBg} />
        </video>
      )}
      {isMobile && (
        <video className="mobileVideo w-100" muted autoPlay loop>
          <source src={mobileBg} />
        </video>
      )}
      <div className="menu-section">
        <Menu />
      </div>
      <div className="content bg-transparent text-center">
        <h1 className="bg-transparent text-center">
          crafted for the
          <br /> creditworthy
        </h1>
      </div>
      <div className="content bg-transparent text-center">
        <p className="intro-sub-txt">
          CRED is a members-only club that enables the
          <br />
          trustworthy to make financial progress
        </p>
      </div>
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8 />
      <Section_9 />
      <Section_10 />
      <Footer />
    </div>
  );
}

export default Home;
