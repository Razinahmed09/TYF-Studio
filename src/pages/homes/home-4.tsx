"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import MissionOne from "@/components/mission/mission-one";
import ProjectFour from "@/components/project/project-four";
import ContactTwo from "@/components/contact/contact-two";
import FooterFour from "@/layouts/footers/footer-four";
import PerspectivePortfolioSlider from "@/components/portfolio/slider/perspective-port-slider";

// animations
import { perspective } from "@/utils/perspective-anim";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";

// -----------------------
// Loader Component
// -----------------------
const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to("#loader-wrapper", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => setLoading(false),
      });
    }, 800); // adjust delay if needed
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="loader-wrapper"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(90deg, #6b442d 0%, #41342c 54%, #2b2b2b 100%);",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <span
          style={{
            width: "15px",
            height: "15px",
            background: "#8a5e47ff",
            borderRadius: "50%",
            animation: "bounce 0.6s infinite alternate",
            animationDelay: "0s",
          }}
        ></span>
        <span
          style={{
            width: "15px",
            height: "15px",
            background: "#ffffffff",
            borderRadius: "50%",
            animation: "bounce 0.6s infinite alternate",
            animationDelay: "0.2s",
          }}
        ></span>
        <span
          style={{
            width: "15px",
            height: "15px",
            background: "#6b442d",
            borderRadius: "50%",
            animation: "bounce 0.6s infinite alternate",
            animationDelay: "0.4s",
          }}
        ></span>
      </div>

      <style>
        {`
          @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
};

// -----------------------
// HomeFourMain Component
// -----------------------
const HomeFourMain = () => {
  useScrollSmooth();

  // add smooth scroll class
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  // cursor animation
  useEffect(() => {
    if (typeof window !== "undefined" && document.querySelector(".tp-magic-cursor")) {
      cursorAnimation();
    }
  }, []);

  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      perspective();
      revelAnimationOne();
    }, 100);
    return () => clearTimeout(timer);
  });

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {/* Loader */}
      <Loader />

      <Wrapper>
        {/* Header */}
        <HeaderOne />

        {/* Magic Cursor */}
        <div id="magic-cursor">
          <div id="ball"></div>
        </div>

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              {/* Hero Banner */}
              <HeroBannerFour />

              {/* About */}
              <AboutThree />

              {/* Gallery */}
              <GalleryOne />

              {/* Projects */}
              <ProjectFour />

              {/* Perspective Portfolio */}
              <PerspectivePortfolioSlider />

              {/* Mission */}
              <MissionOne />

              {/* Get in Touch Hero Section */}
              <div className="tm-hero-area tm-hero-ptb p-relative pt-0">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Liko Studio</span>
                        <h4 className="tm-hero-title-big tp-char-animation">Get in touch</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <ContactTwo />
            </main>

            {/* Footer */}
            <FooterFour />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default HomeFourMain;
