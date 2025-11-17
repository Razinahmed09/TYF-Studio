"use client";
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix" style={{ paddingTop: "90px ", paddingBottom: "0" }}>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // ← hover par autoplay pause
        }}
        loop
        speed={900}
        slidesPerView={1}
        className="tp-hero-slider overlap-slider"
      >
        {/* SLIDE 01 */}
        <SwiperSlide className="overlap-slide">
          <div className="parentslider_Inner" style={{
            backgroundImage: "url('/assets/img/home-04/hero/heroImg2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "60px 0",
            maxWidth: "1200px",
            margin: "0 auto",
            borderRadius: "50px",
            color: "#fff"
          }}>
          <div className="slide-inner">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-hero-3-content-box text-center p-relative">
                    <div className="tp-hero-3-circle-shape">
                      <span></span>
                    </div>

                    <h4 className="tp-hero-3-title tp_reveal_anim text-white" style={{fontSize: '110px'}}>
                      <span className="tp-reveal-line">Where Fire <br /></span>
                      <span className="tp-reveal-line">Meets Form</span>
                    </h4>

                    <span className="tp-hero-3-category tp_reveal_anim text-white">
                      Bahamian metal art by sculptor Tyrone Ferguson — where craft meets creativity.
                    </span>

                    <Link className="tp-btn-black-2" href="#">
                      Exlpore Artworks{" "}
                      <span className="p-relative">
                        <RightArrowTwo />
                        <ArrowBg />
                      </span>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 02 */}
        <SwiperSlide className="overlap-slide">
          <div className="" style={{
            backgroundImage: "url('/assets/img/home-04/hero/heroImg1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "60px 0",
            maxWidth: "1200px",
            margin: "0 auto",
            borderRadius: "50px",
            color: "#fff"
          }}>
          <div className="slide-inner">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-hero-3-content-box text-center p-relative">
                    <div className="tp-hero-3-circle-shape">
                      <span></span>
                    </div>

                    <h4 className="tp-hero-3-title tp_reveal_anim text-white" style={{fontSize: '110px'}}>
                      <span className="tp-reveal-line">Handcrafted <br /></span>
                      <span className="tp-reveal-line"> Metal Art</span>
                    </h4>

                    <span className="tp-hero-3-category tp_reveal_anim text-white">
                      Hand-crafted metal creations forged with passion and precision.
                    </span>

                    <Link className="tp-btn-black-2" href="#">
                      Join a Workshop{" "}
                      <span className="p-relative">
                        <RightArrowTwo />
                        <ArrowBg />
                      </span>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 03 */}
        <SwiperSlide className="overlap-slide">
          <div className="" style={{
            backgroundImage: "url('/assets/img/home-04/hero/heroImg4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "60px 0",
            maxWidth: "1200px",
            margin: "0 auto",
            borderRadius: "50px",
            color: "#fff"
          }}>
          <div className="slide-inner">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-hero-3-content-box text-center p-relative">
                    <div className="tp-hero-3-circle-shape">
                      <span></span>
                    </div>

                    <h4 className="tp-hero-3-title tp_reveal_anim text-white" style={{fontSize: '110px'}}>
                      <span className="tp-reveal-line">Crafting Beauty <br /></span>
                      <span className="tp-reveal-line"> From Raw Metal</span>
                    </h4>

                    <span className="tp-hero-3-category tp_reveal_anim text-white">
                      Unique metal artworks shaped with fire, skill, and imagination.
                    </span>

                    <Link className="tp-btn-black-2" href="#">
                      Visit The Studio{" "}
                      <span className="p-relative">
                        <RightArrowTwo />
                        <ArrowBg />
                      </span>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* Overlap Animation CSS */}
      <style jsx global>{`
        .overlap-slider {
    overflow: visible !important;
  }

  .overlap-slide {
    position: relative;
    overflow: hidden;   /* FIX overlapping text */
    height: 100%;
    padding: 60px 0;
    transition: transform 0.9s ease, opacity 0.9s ease !important;
  }

  .overlap-slide.swiper-slide-prev {
    transform: translateX(-60px) scale(0.9);
    opacity: 0.4;
    z-index: 5;
  }

  .overlap-slide.swiper-slide-active {
    transform: translateX(0) scale(1);
    opacity: 1;
    z-index: 10;
  }

  .overlap-slide.swiper-slide-next {
    transform: translateX(60px) scale(0.9);
    opacity: 0.4;
    z-index: 5;
  }

  .slide-inner {
    position: relative;
    z-index: 20;
  }
      `}</style>

    </div>
  );
}
