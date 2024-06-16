import React from "react";
import "./Section_6.css";
function Section_6() {
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  return (
    <div className="section-6" id="section-6-container">
      <div className="section-6-video">
        <video autoPlay muted loop className="w-100">
          <source
            src={
              isMobile ? "/rewards-mobile.mp4" : "/rewards-desktop-final.mp4"
            }
          />
        </video>
      </div>
      <div className="section-6-txt d-flex flex-column justify-content-center align-items-center">
        {isMobile ? (
          <>
            <h1 className="section-6-header">
              feel the odds fall in your favor
            </h1>
            <h6 className="section-6-sub-txt">
              unlock cashback, exclusive rewards from
              <br /> select brands, and special access to curated
              <br /> products and experiences.
            </h6>
          </>
        ) : (
          <>
            {" "}
            <h1 className="section-6-header">
              feel the odds fall
              <br />
              in your favor
            </h1>
            <h6 className="section-6-sub-txt">
              unlock cashback, exclusive rewards from select brands, and special
              access to
              <br />
              curated products and experiences.
            </h6>
          </>
        )}
        {/* <h1 className="section-6-header">
          feel the odds fall
          <br />
          in your favor
        </h1>
        <h6 className="section-6-sub-txt">
          unlock cashback, exclusive rewards from select brands, and special
          access to
          <br />
          curated products and experiences.
        </h6> */}
      </div>
    </div>
  );
}

export default Section_6;
