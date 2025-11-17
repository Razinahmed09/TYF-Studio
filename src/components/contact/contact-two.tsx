"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactForm from "../form/contact-form";
import Social from "../social/social";
import shape from "@/assets/img/inner-about/about/shape-1.png";
// import shape from "@/assets/img/home-04/portfolio/galleryimage01.png";

export default function ContactTwo() {
  // const images = [
  //   "/assets/img/home-04/portfolio/galleryimage01.png",
  //   "/assets/img/home-04/portfolio/galleryimage02.png",
  //   "/assets/img/home-04/portfolio/galleryimage03.png",
  //   "/assets/img/home-04/portfolio/gallerimage04.png",
  //   "/assets/img/home-04/portfolio/gallerimage05.png"
  // ];

  // const [current, setCurrent] = useState(0);
  // const [fade, setFade] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFade(false); // fade out

  //     setTimeout(() => {
  //       setCurrent((prev) => (prev + 1) % images.length); // switch image
  //       setFade(true); // fade in
  //     }, 500); // fade duration (ms)
  //   }, 1500); // time per image (ms)

  //   return () => clearInterval(interval);
  // }, []);


  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
      <div className="ab-2-hero-social-wrap d-none d-xl-block">
        <div className="ab-2-hero-social">
          <Social/>
        </div>
        <div className="ab-2-hero-social-text">
          <span>Follow us</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="ab-about-category-title-box mb-40 p-relative">
              <h4 className="ab-about-category-title">
                Send a Message <br />
                <span>Contact Us</span>
              </h4>
              <Image
                className="ab-about-shape-1 d-none d-xl-block"
                src={shape}
                alt="shape"
              />
              <div className="imgChanger" style={{ width: "50%", position: "relative" }}>
                 {/* <img
                    src={images[current]}
                    alt="slider"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "20px",
                      transition: "opacity 0.4s ease-in-out",
                      opacity: fade ? 1 : 0
                    }}
                  /> */}
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="cn-contactform-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
