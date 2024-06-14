import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollText.css";

gsap.registerPlugin(ScrollTrigger);

function ScrollText() {
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
        trigger: ".page-2-content",
        start: "10% 50%",
        end: "100% 50%",
        scrub: 1,
      },
    });
    t1.to(".page-2-txt-copy .line-1", {
      width: "100%",
      duration: 5,
    });
    t1.to(".page-2-txt-copy .line-2", {
      width: "100%",
      duration: 5,
    });
    t1.to(".page-2-txt-copy .line-3", {
      width: "100%",
      duration: 5,
    });
    t1.to(".page-2-txt-copy .line-4", {
      width: "100%",
      duration: 5,
    });
    t1.to(".page-2-txt-copy .line-5", {
      width: "100%",
      duration: 5,
    });
    t1.to(".page-2-txt-copy .line-6", {
      width: "100%",
      duration: 5,
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div id="page-2">
      <div className="dummy"></div>
      <div className="page-2-content">
        <div className="page-2-txt">
          the story of CRED begins with trust. we
          <br />
          believe individuals who've proven their
          <br />
          trustworthiness deserve better: better
          <br />
          experiences, better rewards, better rules. this
          <br />
          is the status quo we're building. make it to the
          <br />
          club, and experience the ascension yourself.
        </div>
        <div className="page-2-txt-copy">
          <h1 className="line-1">the story of CRED begins with trust. we</h1>
          <br />
          <h1 className="line-2">believe individuals who've proven their</h1>
          <br />
          <h1 className="line-3">trustworthiness deserve better: better</h1>
          <br />
          <h1 className="line-4">
            {" "}
            experiences, better rewards, better rules. this
          </h1>
          <br />
          <h1 className="line-5">
            {" "}
            is the status quo we're building. make it to the
          </h1>
          <br />
          <h1 className="line-6">
            {" "}
            club, and experience the ascension yourself.
          </h1>
        </div>
      </div>
      <div className="dummy"></div>
    </div>
  );
}

export default ScrollText;
