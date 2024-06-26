import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Section_2.css";
gsap.registerPlugin(ScrollTrigger);
function Section_2() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2-content",
        start: isMobile ? "30% 30%" : "0% 40%",
        end: "120% 50%",
        scrub: isMobile ? 15 : 5,
      },
    });
    t1.to(".section-2-txt-copy .line-1", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-2", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-3", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-4", {
      width: "100%",
      duration: 5,
      delay: -0.2,
    });
    t1.to(".section-2-txt-copy .line-5", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-6", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-7", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-8", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-9", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-10", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-11", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-12", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-13", {
      width: "100%",
      duration: 5,
    });
  }, []);

  return (
    <div id="section-2">
      <div className="row section-2-content">
        <h1 className="section-2-header">NOT EVERYONE MAKES IT IN.</h1>
        <div className="col-md-3"></div>
        <div className="col-md-6 d-flex section-2-wrapper">
          <div className="section-2-txt">
            <h1>the story of CRED</h1>
            <br />
            <h1> begins with trust. we</h1>
            <br />
            <h1>believe individuals</h1>
            <br />
            <h1>who've proven their</h1>
            <br />
            <h1>trustworthiness deserve</h1>
            <br />
            <h1>better: better</h1>
            <br />
            <h1>experiences, better</h1>
            <br />
            <h1>rewards, better rules.</h1>
            <br />
            <h1>this is the status quo</h1>
            <br />
            <h1>we're building. make it</h1>
            <br />
            <h1>to the club, and</h1>
            <br />
            <h1>experience the</h1>
            <br />
            <h1>ascension yourself.</h1>
          </div>
          <div className="section-2-txt-copy">
            <h1 className="line-1">the story of CRED</h1>
            <br />
            <h1 className="line-2">begins with trust. we</h1>
            <br />
            <h1 className="line-3">believe individuals</h1>
            <br />
            <h1 className="line-4"> who've proven their</h1>
            <br />
            <h1 className="line-5"> trustworthiness deserve</h1>
            <br />
            <h1 className="line-6"> better: better</h1>
            <br />
            <h1 className="line-7"> experiences, better</h1>
            <br /> <h1 className="line-8"> rewards, better rules.</h1>
            <br /> <h1 className="line-9"> this is the status quo</h1>
            <br /> <h1 className="line-10"> we're building. make it</h1>
            <br /> <h1 className="line-11"> to the club, and</h1>
            <br /> <h1 className="line-12"> experience the</h1>
            <br /> <h1 className="line-13"> ascension yourself.</h1>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Section_2;
