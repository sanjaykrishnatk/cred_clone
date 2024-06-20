import React from "react";
import videoBg from "../assets/hero-desktop.mp4";
import mobileBg from "../assets/hero-mobile.mp4";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Section_2 from "../sections/Section_2";
import Section_3 from "../sections/Section_3";
import Section_4 from "../sections/Section_4";
import Section_5 from "../sections/Section_5";
import Section_6 from "../sections/Section_6";
import Section_7 from "../sections/Section_7";
import Section_8 from "../sections/Section_8";
import Section_9 from "../sections/Section_9";
import Section_10 from "../sections/Section_10";
import Footer from "../sections/Footer";
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
        {isMobile && (
          <div
            className="sec-9-btn home-mobile-btn"
            style={{ marginTop: "53px" }}
          >
            <a
              href="https://app.cred.club/k63y/ciofyb98"
              style={{ textDecoration: "none", outline: "0px" }}
              rel="noreferrer"
            >
              <div className="btn-inner" style={{ marginTop: "0px" }}>
                <div>
                  <div
                    className="btn-txt"
                    style={{ fontSize: "10px", fontWeight: "bold" }}
                  >
                    DOWNLOAD CRED
                  </div>
                </div>
                <svg
                  width="19"
                  height="8"
                  viewBox="0 0 32 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="btn-arrow"
                >
                  <path
                    d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        )}
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
