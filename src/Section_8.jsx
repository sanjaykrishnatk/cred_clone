import React from "react";
import "./Section_8.css";
function Section_8() {
  return (
    <div className="d-flex section-8">
      <div className="section-8-content d-flex align-items-center">
        <div className="section-8-txt">
          <h6 className="section-8-sub-txt">TRUSTED BY 15M MEMBERS</h6>
          <h1 className="section-8-header">
            the proof
            <br />
            writes itself
          </h1>
        </div>
        <div className="section-8-rating">
          <div className="rating-card d-flex flex-column">
            <img
              src="/rating-stars.png"
              alt="rating-stars"
              className="rating-stars"
            />
            <h1 className="rating-card-txt">
              4.8<span className="rating-card-sub-txt">/5</span>
            </h1>
            <h3 className="rating-card-secondary-txt">APP STORE</h3>
          </div>
          <div className="rating-card d-flex flex-column">
            <img
              src="/rating-stars.png"
              alt="rating-stars"
              className="rating-stars"
            />
            <h1 className="rating-card-txt">
              4.8<span className="rating-card-sub-txt">/5</span>
            </h1>
            <h3 className="rating-card-secondary-txt">PLAY STORE</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_8;
