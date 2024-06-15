import React, { useEffect, useState } from "react";
import videoBg from "./assets/hero-desktop.mp4";
import mobileBg from "./assets/hero-mobile.mp4";
import Menu from "./Menu";
import Banner from "./Banner";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";
import Pay from "./Pay";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const setMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    setMobile(); // Set initial state
    window.addEventListener("resize", setMobile); // Update state on resize
    return () => window.removeEventListener("resize", setMobile);
  }, []);

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
    </div>
  );
}

export default Home;
