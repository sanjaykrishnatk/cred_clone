import React from "react";
import "./Section_4.css";
function Section_4() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <>
      <div className="row ms-0 me-0 p-0">
        <div className="col-12 ps-0 pe-0 section-4-content">
          <div className="section-4-text">
            {isMobile ? (
              <>
                <h1 className="section-4-header">
                  do more with your credit cards.
                </h1>
                <h6 className="section-4-sub-text">
                  manage your credit cards better and improve your credit score:
                  receive payment reminders, uncover hidden fees, get spending
                  insights, and discover ways to maximize card benefits.
                </h6>
              </>
            ) : (
              <>
                <h1 className="section-4-header">
                  do more with
                  <br />
                  your credit cards.
                </h1>
                <h6 className="section-4-sub-text">
                  manage your credit cards better and improve your credit score:{" "}
                  <br /> receive payment reminders, uncover hidden fees, get
                  spending
                  <br /> insights, and discover ways to maximize card benefits.
                </h6>
              </>
            )}
          </div>
          <video autoPlay muted loop className="w-100 sec-4-video">
            <source src={isMobile ? "ccbp-fold-m.mp4" : "/ccbp-fold-d.mp4"} />
          </video>
        </div>
      </div>
    </>
  );
}

export default Section_4;
