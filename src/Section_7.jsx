import React, { useState } from "react";
import "./Section_7.css";

function Section_7() {
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    const xPos = (x / width) * 100;
    const yPos = (y / height) * 100;

    setBackgroundPosition(`${xPos}% ${yPos}%`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setBackgroundPosition("50% 50%");
  };

  return (
    <div className="section-7 d-flex flex-column justify-content-md-center align-items-center">
      <img src="/datasafe.png" alt="data-safe-img" className="data-safe-img" />
      {isMobile ? (
        <>
          <h2 className="section-7-header">
            YOUR DATA ISN'T OUR BUSINESS.
            <br />
            KEEPING IT SAFE IS.
          </h2>
          <h6
            className="section-7-txt"
            style={{
              backgroundImage: isHovered
                ? "radial-gradient(circle closest-side at 50% 50%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 60%, rgba(255, 255, 255, 0.4) 80%, transparent 100%)"
                : "none",
              backgroundPosition,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            all your personal data and transactions are encrypted and secured.
            there's no room for mistakes because we didn't leave any.
          </h6>
        </>
      ) : (
        <>
          <h2 className="section-7-header">
            YOUR DATA ISN'T OUR BUSINESS. KEEPING IT SAFE IS.
          </h2>
          <h6
            className="section-7-txt"
            style={{
              backgroundImage: isHovered
                ? "radial-gradient(circle closest-side at 50% 50%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 60%, rgba(255, 255, 255, 0.4) 80%, transparent 100%)"
                : "none",
              backgroundPosition,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            all your personal data and <br />
            transactions are encrypted and <br />
            secured. there's no room for mistakes <br />
            because we didn't leave any.
          </h6>
        </>
      )}
    </div>
  );
}

export default Section_7;
