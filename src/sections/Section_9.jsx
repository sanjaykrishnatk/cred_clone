import React from "react";
import "./Section_9.css";
// import Banner from "../components/Banner";
function Section_9() {
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const largeDevStyle = {
    backgroundImage: "url(/cta-fold-final.png)",
    backgroundSize: "cover",
    backgroundPosition: "left center",
  };
  const smallDevStyle = {
    backgroundImage: "url(/cta-fold-final-m.png)",
  };
  return (
    <div
      className="section-9 d-flex justify-content-center align-items-center"
      style={isMobile ? smallDevStyle : largeDevStyle}
    >
      <div className="section-9-content d-flex justify-content-center align-items-center">
        {!isMobile && <div className="placeholder"></div>}
        <div className="section-9-main d-flex flex-column justify-content-between">
          <div className="sec-9-1">
            {!isMobile && (
              <div className="banner-main-9">
                <div className="d-flex banner-wrap">
                  <img src="/qr-final.png" alt="qr-code" width={"80px"} />
                  <div className="banner-txt">
                    Download
                    <br /> CRED
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="sec-9-2">
            <h1 className="sec-9-header">
              not everyone
              <br />
              gets it
            </h1>
          </div>
          <div className="sec-9-3">
            <h5 className="sec-9-sub-txt">
              like all good things in life, earning a CRED membership is not
              easy; but the possibility of unlocking a greater future makes the
              effort worthwhile.
            </h5>
          </div>
          {isMobile && (
            <div className="sec-9-4">
              <div className="sec-9-btn">
                <a
                  href="https://app.cred.club/k63y/ciofyb98"
                  style={{ textDecoration: "none", outline: "0px" }}
                  rel="noreferrer"
                >
                  <div className="btn-inner">
                    <div>
                      <div className="btn-txt">DOWNLOAD CRED</div>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section_9;
