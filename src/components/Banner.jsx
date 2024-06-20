import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner-main">
      <div className="d-flex banner-wrap">
        <img src="/qr-final.png" alt="qr-code" width={"80px"} />
        <div className="banner-txt">
          Download
          <br /> CRED
        </div>
      </div>
    </div>
  );
}

export default Banner;
