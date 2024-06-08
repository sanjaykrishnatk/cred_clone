import React from "react";
import "./Pay.css";
import { Col } from "react-bootstrap";
function Pay() {
  return (
    <div className="pay-wrapper">
      <div className="pay-content d-flex flex-column align-items-center justify-content-center">
        <img src="/ray-01.png" alt="orange-ray" id="orange-ray" />
        <img src="/ray-02.png" alt="white-ray" id="white-ray" />
        <img src="/sun.png" alt="orange-sun" id="sun-img" />
        <img src="/cred-pay-logo.png" alt="cred-pay-logo" id="cred-pay-logo" />
        <div className="intro-text">
          <h1 className="p-0 text-center">
            <span id="intro-main">CRED</span> pay
            <br />
            has arrived
          </h1>
        </div>
        <div className="dump">
          <div className="sc-19yl9ou-4 eXLbSZ">
            <span>CRED </span>pay <br />
            has arrived
          </div>
        </div>
        <img src="/rainbow-curve-02.png" alt="rainbow-img" id="rainbow-img" />
      </div>
      <div className="row sec-page m-0 p-0 w-100 d-flex flex-column justify-content-center align-items-center text-light">
        <h1 className="m-0 ps-4 pe-4 p-md-0 text-center">
          make a statement
          <br />
          <span className="sec-page-txt" style={{ fontSize: "100px" }}>
            every time you pay
          </span>
        </h1>
        <h5 className="ps-5 pe-5 p-md-0 sec-page-sub-txt">
          scan & pay via UPI. earn assured rewards. claim collectibles. all
          <br /> of this in a secure payment experience the creditworthy
          deserve.
        </h5>
        <p className="green-sub-txt">HOW IT WORKS</p>
        <img src="/arrow.png" alt="arrow" className="arrow" />
      </div>
      <div className="row ms-0 me-0 p-0 feature-section">
        <div className="col-md-1"></div>
        <div className="col-md-10 d-flex align-items-center justify-content-center">
          <div className="row d-flex justify-content-between feature-1 w-100 p-5">
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center p-0">
              <h1 className="feature-main mb-0 ms-md-5 ps-0">
                scan
                <br />
                any QR
              </h1>
              <h4 className="feature-sub ms-md-5 ">
                all codes are welcome. simply open
                <br /> CRED and swipe left to scan.
              </h4>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center ">
              <video autoPlay muted loop className="feature-video">
                <source src="/snp_feature_01.mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row ms-0 me-0 p-0 feature-section">
        <div className="col-md-1"></div>
        <div className="col-md-10 d-flex align-items-center justify-content-center">
          <div className="row d-flex justify-content-between feature-1 w-100 p-5">
            <div className="col-md-6 col-sm-12 d-flex align-items-center order-2 order-md-1">
              <video autoPlay muted loop className="feature-video v-2 ">
                <source src="/snp_feature_02.mp4" />
              </video>
            </div>
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center p-0 order-1 order-md-2">
              <h1 className="feature-main mb-0 ms-md-5 ps-0">
                pay
                <br />
                instantly
              </h1>
              <h4 className="feature-sub ms-md-5 ">
                while patience is a virtue, you’ll
                <br />
                never get the chance to exercise
                <br />
                yours.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row ms-0 me-0 p-0 feature-section">
        <div className="col-md-1"></div>
        <div className="col-md-10 d-flex align-items-center justify-content-center">
          <div className="row d-flex justify-content-between feature-1 w-100 p-5">
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center p-0">
              <h1 className="feature-main mb-0 ms-md-5 ps-0">
                earn
                <br />
                assured
                <br />
                rewards
              </h1>
              <h4 className="feature-sub ms-md-5 ">
                the experience isn't the only reward.
                <br />
                earn assured cashback, coins, and
                <br />
                more on every transaction.
              </h4>
            </div>
            <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center ">
              <video autoPlay muted loop className="feature-video">
                <source src="/snp_feature_03.mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div className="row ms-0 me-0 p-0 shopping">
        <div className="col-md-2"></div>
        <div className="col-md-8 col-sm-12  d-flex flex-column justify-content-center align-items-center">
          <img
            src="/snp-merchants-logostrip.png"
            alt="snp-merchants-logo"
            width={"79%"}
            id="snp-merchants"
          />
          <h1 className="p-0 mb-0 shopping-txt">
            shopping is hard.{" "}
            <span
              className="shopping-sub"
              style={{ color: "rgb(255, 87, 208)" }}
            >
              for others.
            </span>
            <br />
            for you, it’s as easy as picking a{" "}
            <span
              className="shopping-sub"
              style={{ color: "rgb(52, 243, 255)" }}
            >
              partner
            </span>
            <br />
            <span
              className="shopping-sub"
              style={{ color: "rgb(52, 243, 255)" }}
            >
              brand outlet,{" "}
            </span>
            paying with
            <span
              className="shopping-sub"
              style={{ color: "rgb(195, 255, 23)" }}
            >
              {" "}
              CRED pay,
            </span>
            <br />
            and{" "}
            <span
              className="shopping-sub"
              style={{ color: "rgb(255, 153, 0)" }}
            >
              claiming 2x cashback.
            </span>
          </h1>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row ms-0 me-0 w-100 security">
        <div className="col-md-3"></div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <h1 className="security-txt text-center">
            on CRED pay,
            <br />
            security is first.
            <br />
            <span>and second.</span>
          </h1>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row ms-0 me-0 w-100 upi">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center order-2 order-md-1 upi-txt-container">
              <h1 className="fw-bold upi-txt">
                switch to anonymity.
                <br /> create an alias UPI ID.
              </h1>
              <h4 className="upi-sub-txt">
                hide your sensitive details from
                <br />
                merchants when you pay. because your
                <br />
                details are for your eyes only.
              </h4>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center order-1 order-md-2">
              <video
                autoPlay
                muted
                loop
                width={"430px"}
                height={"230px"}
                className="security-video"
              >
                <source src="/security-anonymity.mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row ms-0 me-0 w-100 upi">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center order-2 order-md-2 ps-md-5 upi-txt-container">
              <h1 className="fw-bold upi-txt">
                your payments come
                <br />
                with a safety net
              </h1>
              <h4 className="upi-sub-txt">
                in the unlikely event of a payment not
                <br />
                going through, make another one. if
                <br />
                you're charged for the first, CRED will
                <br /> credit you the money back.
              </h4>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center  order-1 order-md-1 ps-0">
              <video
                autoPlay
                muted
                loop
                width={"430px"}
                height={"230px"}
                className="security-video"
              >
                <source src="/security-payments.mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default Pay;
