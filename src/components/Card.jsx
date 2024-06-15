import React from "react";
import "./Card.css";
function Card(props) {
  const { text1, text2, bgImg, iconImg } = props;
  return (
    <div className="cred-card" style={{ backgroundImage: `url(./${bgImg})` }}>
      <img src={iconImg} alt="scan and pay img" className="cred-card-img" />
      <div className="cred-card-txt">
        {text1}
        <br /> {text2}
      </div>
      <div className="cred-card-btn">
        <div className="btn-txt">KNOW MORE</div>
        <svg
          width="19"
          height="8"
          style={{ marginLeft: "14px" }}
          viewBox="0 0 32 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Card;
