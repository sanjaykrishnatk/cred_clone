import React from "react";
import "./Section_5.css";
import Card from "./components/Card";
function Section_5() {
  return (
    <div className="d-flex flex-column section-5">
      <h1 className="section-5-header">
        upgrade your life.
        <br />
        bit by bit.
      </h1>
      <div className="card-wrapper">
        <div className="card-container">
          <Card
            text1={"scan and pay"}
            text2={"any UPI QR"}
            bgImg={"scan-n-pay.png"}
            iconImg={"snp-logo-final.png"}
          />
          <Card
            text1={"UPI payments."}
            text2={"on credit."}
            bgImg={"cc-on-upi.png"}
            iconImg={"rupay-logo-final.png"}
          />{" "}
          <Card
            text1={"tap your phone."}
            text2={"pay on credit."}
            bgImg={"tap-n-pay.png"}
            iconImg={"tnp-logo-final.png"}
          />{" "}
          <Card
            text1={"send money to"}
            text2={"any UPI app"}
            bgImg={"p2p.png"}
            iconImg={"p2p-logo-final.png"}
          />{" "}
          <Card
            text1={"manage your"}
            text2={"cars' vitals"}
            bgImg={"garage.png"}
            iconImg={"garage-logo-final.png"}
          />{" "}
          <Card
            text1={"travel, curated"}
            text2={"for members"}
            bgImg={"escapes.png"}
            iconImg={"escapes-logo-final.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default Section_5;
