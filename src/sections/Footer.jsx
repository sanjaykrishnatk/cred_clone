import React, { useState } from "react";
import "./Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Footer() {
  const [openSection, setOpenSection] = useState("f1");
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const handleFooter = (value) => {
    openSection == value ? setOpenSection(null) : setOpenSection(value);
  };
  const getFooterStyle = (value) => {
    return openSection == value ? { display: "grid" } : { display: "none" };
  };
  const getIconStyle = (value) => {
    return openSection == value
      ? { transform: "rotate(45deg)", transition: "all 0.3s ease-in-out 0s" }
      : { transform: "rotate(0deg)", transition: "all 0.3s ease-in-out 0s" };
  };
  return (
    <div className="footer-wrapper">
      {isMobile ? (
        <footer className="footer-mobile d-flex flex-column">
          <div className="footer-m-content d-flex flex-column">
            <Row className="w-100 ms-0 me-0" style={{ position: "relative" }}>
              <div
                className="now-live-m d-flex align-items-center justify-content-center"
                style={{ width: "auto" }}
              >
                NOW LIVE
              </div>
              <img
                src="/spotlight-poster-final.png"
                alt="spotlight-poster-final"
                className="footer-m-spotlight w-100"
              />
            </Row>
            <img
              src="/cred-footer-logo.png"
              alt="cred-footer-logo"
              style={{ width: "70px" }}
            />
            <Row className="w-100 ms-0 me-0 d-flex flex-column">
              <Row className="w-100 ms-0 me-0 footer-wrapper-m ps-0 pe-0">
                <div
                  className="d-flex footer-btn-m"
                  onClick={() => handleFooter("f1")}
                >
                  <div>UPGRADES</div>
                  <div>
                    <img
                      src="/plus-icon.png"
                      alt="plus-icon"
                      className="plus-icon"
                      style={getIconStyle("f1")}
                    />
                  </div>
                </div>
                <div className="footer-content-m-wrapper p-0">
                  <div
                    className="footer-content-m"
                    style={getFooterStyle("f1")}
                  >
                    <div className="footer-links-m">CRED mint</div>
                    <div className="footer-links-m">CRED garage</div>
                    <div className="footer-links-m">CRED escapes</div>
                  </div>
                </div>
              </Row>
              <Row className="w-100 ms-0 me-0 footer-wrapper-m ps-0 pe-0">
                <div
                  className="d-flex footer-btn-m"
                  onClick={() => handleFooter("f2")}
                >
                  <div>COMPANY</div>
                  <div>
                    <img
                      src="/plus-icon.png"
                      alt="plus-icon"
                      style={getIconStyle("f2")}
                      className="plus-icon"
                    />
                  </div>
                </div>
                <div className="footer-content-m-wrapper p-0">
                  <div
                    className="footer-content-m"
                    style={getFooterStyle("f2")}
                  >
                    <div className="footer-links-m">about CRED</div>
                    <div className="footer-links-m">careers</div>
                  </div>
                </div>
              </Row>
              <Row className="w-100 ms-0 me-0 footer-wrapper-m ps-0 pe-0">
                <div
                  className="d-flex footer-btn-m"
                  onClick={() => handleFooter("f3")}
                >
                  <div>INSIDER PERKS</div>
                  <div>
                    <img
                      src="/plus-icon.png"
                      alt="plus-icon"
                      style={getIconStyle("f3")}
                      className="plus-icon"
                    />
                  </div>
                </div>
                <div className="footer-content-m-wrapper p-0">
                  <div
                    className="footer-content-m"
                    style={getFooterStyle("f3")}
                  >
                    <div className="footer-links-m">upgrade to UPI</div>
                  </div>
                </div>
              </Row>
              <Row className="w-100 ms-0 me-0 footer-wrapper-m ps-0 pe-0">
                <div
                  className="d-flex footer-btn-m"
                  onClick={() => handleFooter("f4")}
                >
                  <div>PAYMENTS</div>
                  <div>
                    <img
                      src="/plus-icon.png"
                      alt="plus-icon"
                      style={getIconStyle("f4")}
                      className="plus-icon"
                    />
                  </div>
                </div>
                <div className="footer-content-m-wrapper p-0">
                  <div
                    className="footer-content-m"
                    style={getFooterStyle("f4")}
                  >
                    <div className="footer-links-m">Scan & Pay</div>
                    <div className="footer-links-m">Tap to Pay</div>
                    <div className="footer-links-m">Pay anyone</div>
                    <div className="footer-links-m">RuPay cards on UPI</div>
                  </div>
                </div>
              </Row>
              <Row className="w-100 ms-0 me-0 footer-wrapper-m ps-0 pe-0">
                <div
                  className="d-flex footer-btn-m"
                  onClick={() => handleFooter("f5")}
                >
                  <div>RESOURCES</div>
                  <div>
                    <img
                      src="/plus-icon.png"
                      alt="plus-icon"
                      style={getIconStyle("f5")}
                      className="plus-icon"
                    />
                  </div>
                </div>
                <div className="footer-content-m-wrapper p-0">
                  <div
                    className="footer-content-m"
                    style={getFooterStyle("f5")}
                  >
                    <div className="footer-links-m">partner with us</div>
                    <div className="footer-links-m">calculators</div>
                    <div className="footer-links-m">articles</div>
                    <div className="footer-links-m">tech blog</div>
                    <div className="footer-links-m">credit score guide</div>
                    <div className="footer-links-m">
                      credit card payment guide
                    </div>
                    <div className="footer-links-m">customer care</div>
                    <div className="footer-links-m">
                      Dreampurse (HipBar) wallet refund form
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="w-100 ms-0 me-0 footer-wrapper-m ps-0 pe-0">
                <div
                  className="d-flex footer-btn-m"
                  onClick={() => handleFooter("f6")}
                >
                  <div>POLICY</div>
                  <div>
                    <img
                      src="/plus-icon.png"
                      alt="plus-icon"
                      style={getIconStyle("f6")}
                      className="plus-icon"
                    />
                  </div>
                </div>
                <div className="footer-content-m-wrapper p-0">
                  <div
                    className="footer-content-m"
                    style={getFooterStyle("f6")}
                  >
                    <div className="footer-links-m">
                      transaction & user verification
                    </div>
                    <div className="footer-links-m">google API disclosure</div>
                    <div className="footer-links-m">UPI FAQs & grievances</div>
                    <div className="footer-links-m">returns & refunds</div>
                    <div className="footer-links-m">security</div>
                    <div className="footer-links-m">
                      equal oppurtunity policy
                    </div>
                    <div className="footer-links-m">investor relations</div>
                    <div className="footer-links-m">other disclosures</div>
                  </div>
                </div>
              </Row>
              <Row className="w-100 ms-0 me-0 footer-wrapper-m last-m ps-0 pe-0">
                <div
                  className="d-flex footer-btn-m"
                  onClick={() => handleFooter("f7")}
                >
                  <div>DESIGN</div>
                  <div>
                    <img
                      src="/plus-icon.png"
                      alt="plus-icon"
                      style={getIconStyle("f7")}
                      className="plus-icon"
                    />
                  </div>
                </div>
                <div className="footer-content-m-wrapper p-0">
                  <div
                    className="footer-content-m"
                    style={getFooterStyle("f7")}
                  >
                    <div className="footer-links-m">NeoPOP</div>
                    <div className="footer-links-m">manifesto</div>
                  </div>
                </div>
              </Row>
            </Row>
            <Row className="w-100 footer-m-security ms-0 me-0 d-flex justify-content-center align-items-center">
              <img
                src="/security-final.png"
                alt="security-final"
                className="security-img-m"
                style={{ width: "180px" }}
              />
              <div className="security-txt-m">
                complete security. no astericks.
              </div>
              <div className="security-sub-txt-m">
                CRED encrypts all data and transactions to ensure a<br />
                completely secure experience for our members.
              </div>
            </Row>
            <Row className="w-100 ms-0 me-0 d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <p className="footer-last-txt-m">privacy policy</p>
                <p className="footer-last-txt-m border border-0">
                  terms and conditions
                </p>
              </div>
            </Row>
          </div>
        </footer>
      ) : (
        <footer className="footer-section">
          <div className="d-flex" style={{ columnGap: "40px" }}>
            <div
              className="footer-left d-flex flex-column"
              style={{ width: "100%" }}
            >
              <img
                src="/cred-footer-logo.png"
                alt="cred-footer-logo"
                style={{ width: "100px" }}
              />
              <img
                src="/security-final.png"
                alt="security-final"
                className="security-final"
              />
              <h3 className="footer-header">
                complete security. no astericks.
              </h3>
              <h3 className="footer-sub-txt">
                CRED encrypts all data and transactions to ensure a completely
                secure experience for our members.
              </h3>
            </div>
            <div className="footer-right d-flex flex-column">
              <div className="poster-container">
                <div className="now-live-txt d-flex justify-content-center align-items-center">
                  NOW LIVE
                </div>
                <img
                  src="/spotlight-poster-final.png"
                  alt="poster-image"
                  className="footer-poster"
                />
              </div>
              <Row className="links-container ms-0 me-0">
                <Col className="links-column d-flex flex-column">
                  <Row className="links-row">
                    <h1 className="link-header">UPGRADES</h1>
                    <h3 className="link-txt">CRED mint</h3>
                    <h3 className="link-txt">CRED garage</h3>
                    <h3 className="link-txt">CRED escapes</h3>
                  </Row>
                  <Row className="links-row">
                    <h1 className="link-header">PAYMENTS</h1>
                    <h3 className="link-txt">Scan & Pay</h3>
                    <h3 className="link-txt">Tap to Pay</h3>
                    <h3 className="link-txt">Pay anyone</h3>
                    <h3 className="link-txt">RuPay cards on UPI</h3>
                  </Row>
                </Col>
                <Col className="links-column d-flex flex-column">
                  <Row className="links-row">
                    <h1 className="link-header">COMPANY</h1>
                    <h3 className="link-txt">about CRED</h3>
                    <h3 className="link-txt">careers</h3>
                  </Row>
                  <Row className="links-row">
                    <h1 className="link-header">INSIDER PERKS</h1>
                    <h3 className="link-txt">upgrade to UPI</h3>
                  </Row>
                  <Row className="links-row">
                    <h1 className="link-header">DESIGN</h1>
                    <h3 className="link-txt">NeoPOP</h3>
                    <h3 className="link-txt">manifesto</h3>
                  </Row>
                </Col>
                <Col className="links-column d-flex flex-column">
                  <Row className="links-row">
                    <h1 className="link-header">RESOURCES</h1>
                    <h3 className="link-txt">partner with us</h3>
                    <h3 className="link-txt">calculators</h3>
                    <h3 className="link-txt">articles</h3>
                    <h3 className="link-txt">tech blog</h3>
                    <h3 className="link-txt">credit score guide</h3>
                    <h3 className="link-txt">credit card payment</h3>
                    <h3 className="link-txt">guide</h3>
                    <h3 className="link-txt">customer care</h3>
                    <h3 className="link-txt">Dreampurse (HipBar)</h3>
                    <h3 className="link-txt">wallet refund form</h3>
                  </Row>
                  <Row className="links-row">
                    <h1 className="link-header">POLICY</h1>
                    <h3 className="link-txt">transaction & user</h3>
                    <h3 className="link-txt">verification</h3>
                    <h3 className="link-txt">google API</h3>
                    <h3 className="link-txt">disclosure</h3>
                    <h3 className="link-txt">UPI FAQ & grievances </h3>
                    <h3 className="link-txt">returns and refunds</h3>
                    <h3 className="link-txt">security</h3>
                    <h3 className="link-txt">equal oppurtunity</h3>
                    <h3 className="link-txt">policy</h3>
                    <h3 className="link-txt">investor relations</h3>
                    <h3 className="link-txt">other disclosures</h3>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <Row className="d-flex flex-column footer-last">
            <div className="footer-line"></div>
            <div className="d-flex justify-content-end">
              <h3 className="footer-last-txt">privacy policy</h3>
              <h3 className="footer-last-txt ft-2">terms and conditions</h3>
            </div>
          </Row>
        </footer>
      )}
    </div>
  );
}

export default Footer;
