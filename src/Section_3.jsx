import React from "react";
import "./Section_3.css";
function Section_3() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const videoStyle = isMobile
    ? { width: "100%", height: "40%" }
    : { width: "100%" };

  return (
    <div className="row w-100 ms-0 me-0 p-0">
      <div className="col-md-2"></div>
      <div className="col-md-8 w-100">
        <div className="d-flex flex-column w-100 ms-0 me-0 p-0 section-3-main">
          <video autoPlay muted loop className="w-100" style={videoStyle}>
            <source
              src={
                isMobile
                  ? "/phone-ticker-mobile-final.mp4"
                  : "/phone-ticker-desktop-final.mp4"
              }
            />
          </video>
          {/* <h1 className="text-center section-3-header">
            all what you deserve.
            <br />
            and some more.
          </h1> */}
          {/* <h6 className="section-3-sub-txt text-center">
            if you're a CRED member, you're already a step ahead. every
            <br />
            experience you unlock takes you higher up the pedestal.
          </h6> */}
          {isMobile ? (
            <>
              <h1 className="text-center section-3-header">
                all what you deserve. and some more.
              </h1>
              <h6 className="section-3-sub-txt text-center">
                if you're a CRED member, you're already a step ahead. every
                experience you unlock takes you higher up the pedestal.
              </h6>
            </>
          ) : (
            <>
              <h1 className="text-center section-3-header">
                all what you deserve.
                <br />
                and some more.
              </h1>
              <h6 className="section-3-sub-txt text-center">
                if you're a CRED member, you're already a step ahead. every
                <br />
                experience you unlock takes you higher up the pedestal.
              </h6>
            </>
          )}
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}

export default Section_3;
