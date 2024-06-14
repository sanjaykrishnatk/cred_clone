import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Section_2.css";
gsap.registerPlugin(ScrollTrigger);

function Section_2() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2-content",
        start: "0% 50%",
        end: "100% 50%",
        scrub: 12,
      },
    });
    t1.to(".section-2-txt-copy .line-1", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-2", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-3", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-4", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-5", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-6", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-7", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-8", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-9", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-10", {
      width: "100%",
      duration: 5,
    });
    t1.to(".section-2-txt-copy .line-11", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-12", {
      width: "100%",
      duration: 10,
    });
    t1.to(".section-2-txt-copy .line-13", {
      width: "100%",
      duration: 10,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <div id="section-2">
      <div className="dummy"></div>
      <div className="row section-2-content">
        <div className="col-md-3"></div>
        <div className="col-md-6 d-flex">
          <div className="section-2-txt">
            the story of CRED
            <br />
            begins with trust. we
            <br />
            believe individuals
            <br />
            who've proven their
            <br />
            trustworthiness deserve
            <br />
            better: better
            <br />
            experiences, better
            <br />
            rewards, better rules.
            <br />
            this is the status quo
            <br />
            we're building. make it
            <br />
            to the club, and
            <br />
            experience the
            <br />
            ascension yourself.
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
      <div className="dummy"></div>
    </div>
  );
}

export default Section_2;
