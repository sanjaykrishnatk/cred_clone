import React, { useState } from "react";
import "./Pay.css";
function Pay() {
  const [image, setImage] = useState("orange-snp-screen");
  const [bg, setBg] = useState("lunar-orange");
  const [img1, img1Clicked] = useState(false);
  const [img2, img2Clicked] = useState(true);
  const [img3, img3Clicked] = useState(false);
  const [pos1, setPos1] = useState("left");
  const [pos2, setPos2] = useState("middle");
  const [pos3, setPos3] = useState("right");
  const clickedImage = {
    transition: "all 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0s",
    top: "0%",
    left: "50%",
    width: "108.46px",
    height: " 108.46px",
    border: "2.58434px solid rgb(86, 249, 71)",
    borderRadius: "50%",
    marginRight: "10px",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    outline: "none",
    cursor: "pointer",
    transformOrigin: "center center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const defaultStyle1 = {
    transition: "all 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0s",
    top: "32%",
    left: "25%",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: "79.7px",
    height: "79.7px",
    borderRadius: "50%",
    marginRight: "10px",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    border: "2.44962px solid rgb(255, 255, 255)",
    outline: "none",
    cursor: "pointer",
    transformOrigin: "center center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const defaultStyle3 = {
    transition: "all 0.6s cubic-bezier(0.76, 0, 0.24, 1) 0s",
    top: "32%",
    left: "75%",
    backgroundColor: "rgba(0, 0, 0, 0)",
    width: "79.7px",
    height: "79.7px",
    borderRadius: "50%",
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    border: "2.44962px solid rgb(255, 255, 255)",
    outline: "none",
    cursor: "pointer",
    transformOrigin: "center center",
  };

  const handleImageChange = (e, image) => {
    let position = e.target.name;
    setImage(image);
    if (image == "orange-snp-screen") {
      if (img1) {
        setPos1(position);
      } else if (img3) {
        setPos3(position);
      }
      setPos2("middle");
      setBg("lunar-orange");
      img2Clicked(true);
      img1Clicked(false);
      img3Clicked(false);
    } else if (image == "greyish-snp-screen") {
      if (img2) {
        setPos2(position);
      } else if (img3) {
        setPos3(position);
      }
      setPos1("middle");
      setBg("lunar-greyish");
      img1Clicked(true);
      img3Clicked(false);
      img2Clicked(false);
    } else {
      if (img1) {
        setPos1(position);
      } else if (img2) {
        setPos2(position);
      }
      setPos3("middle");
      setBg("lunar-purple");
      img3Clicked(true);
      img2Clicked(false);
      img1Clicked(false);
    }
  };
  const getStyle = (position) => {
    console.log(position);
    if (position == "middle") {
      return clickedImage;
    } else if (position == "left") {
      return defaultStyle1;
    } else {
      return defaultStyle3;
    }
  };
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
          <span className="sec-page-txt">every time you pay</span>
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
            <div className="col-md-6 col-sm-12 d-flex align-items-center order-2 order-md-1 justify-content-center">
              <video autoPlay muted loop className="feature-video v-2 ms-0">
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
      <div className="row ms-0 me-0 w-100 personalize">
        <div className="col-md-2"></div>
        <div className="col-md-8 d-flex flex-column align-items-center justify-content-center">
          <h1 className="personalize-txt mb-0">meet your skin</h1>
          <h4 className="personalize-sub-txt">
            CRED pay is built to showcase you. your tastes. your wins. your
            <br />
            collections. explore the skins your scanner can wear. it might just
            be what
            <br />
            you need to find yourself.
          </h4>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row ms-0 me-0 w-100 bg-change">
        <div
          className="col-md-12 d-flex flex-column justify-content-center align-items-center bg-content"
          style={{ backgroundImage: `url(/${bg}.png)` }}
        >
          <div className="mobile-bg">
            <img
              src={`/${image}.png`}
              alt="phone-skin"
              className="phone-skin"
              style={{ transition: "all 0.8s ease-out 0s" }}
            />
          </div>
          <div className="planet-image d-flex justify-content-center align-items-center">
            <div className="planet-1">
              <img
                src="/icon-01.png"
                alt="icon-01"
                className={`${
                  pos1 == "middle" ? "planet-sm" : ""
                } planets-icon`}
                name={pos1}
                onClick={(e) => handleImageChange(e, "greyish-snp-screen")}
                style={getStyle(pos1)}
              />
            </div>
            <div className="planet-2">
              <img
                src="/icon-02.png"
                alt="icon-02"
                className={`${
                  pos2 == "middle" ? "planet-sm" : ""
                } planets-icon`}
                name={pos2}
                onClick={(e) => handleImageChange(e, "orange-snp-screen")}
                style={getStyle(pos2)}
              />
            </div>
            <div className="planet-3">
              <img
                src="/icon-03.png"
                alt="icon-03"
                className={`${
                  pos3 == "middle" ? "planet-sm" : ""
                } planets-icon`}
                name={pos3}
                onClick={(e) => handleImageChange(e, "purple-snp-screen")}
                style={getStyle(pos3)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="planet-caption  d-flex flex-column justify-content-center align-items-center">
        <h6 className="planet-text">STELLAR</h6>
        <p className="planet-sub-text">TAP TO CHANGE ENVIRONMENT</p>
      </div>
    </div>
  );
}

export default Pay;
