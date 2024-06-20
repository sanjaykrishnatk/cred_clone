import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./Section_10.css";
function Section_10() {
  const [open, setOpen] = useState(false);
  const isMobile = window.matchMedia("(max-width:768px)").matches;

  return (
    <div className="section-10">
      <div className="d-flex justify-content-center align-items-center">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="faq-btn"
        >
          {isMobile ? "FAQs" : "FREQUENTLY ASKED QUESTIONS"}
          <img
            src="/down-arrow.png"
            alt="down-arrow"
            className="down-arrow"
            style={
              open
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            }
          />
        </Button>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <h1 className="faq-qn mt-0">about cred</h1>
          <h1 className="faq-ans">
            CRED is a members-only club that rewards trustworthy individuals
            with financial and lifestyle progress. members are rewarded with
            exclusive perks and privileges for making sound financial decisions.
            trusted by over 25 million creditworthy members, CRED transforms
            each payment into a rewarding experience.
          </h1>
          <h1 className="faq-qn">getting a membership</h1>
          <h1 className="faq-ans">
            to become a CRED member, you need a credit score of 750 or above.
            you can apply for membership by signing up on CRED with your name
            and a valid mobile number (issued within India). if your credit
            score makes the cut, we'll see you there.
          </h1>
          <h1 className="faq-qn">the CRED membership experience</h1>
          <h1 className="faq-ans">
            CRED's suite of products is designed to help the creditworthy
            fast-track their financial &amp; lifestyle progress. we partner with
            premier brands to offer unparalleled experiences and rewards to our
            members. members also earn cashback and coins on their payments,
            along with opportunities to elevate their lifestyle.
          </h1>
          <h1 className="faq-qn">checking your credit score</h1>
          <h1 className="faq-ans">
            members can check and refresh their credit score on the CRED app.
            CRED acquires the updated credit score through a CIBIL score soft
            inquiry. you can access your credit score data anytime without any
            extra charges. as a member, this helps you keep regular checks on
            your credit score and re-evaluate your spending patterns to maintain
            a healthy credit status.
          </h1>
          <h1 className="faq-qn">banks supported by CRED</h1>
          <h1 className="faq-ans">
            CRED supports credit card bill payments for American Express,
            Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL,
            PNB, and other top Indian banks. We support VISA, MasterCard,
            American Express &amp; RuPay cards.
          </h1>
        </div>
      </Collapse>
    </div>
  );
}

export default Section_10;
