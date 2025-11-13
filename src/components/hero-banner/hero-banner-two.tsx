'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// ✅ Swiper CSS imported locally (not in layout.tsx)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSliderr() {
  const slides = [
    {
      id: 1,
      img: "/assets/img/home-04/hero/heroImg2.png",
      title1: "Where Fire",
      title2: "Meets Form",
      desc: "Discover the art of metal, movement, and meaning at Tyrone Ferguson Studios — a space where imagination is shaped in flame and formed by hand.",
      btn: "Join a Workshop",
    },
    {
      id: 2,
      img: "/assets/img/home-04/hero/heroImg33.png",
      title1: "Where Fire",
      title2: "Meets Form",
      desc: "Discover the art of metal, movement, and meaning at Tyrone Ferguson Studios — a space where imagination is shaped in flame and formed by hand.",
      btn: "Explore Artworks",
    },
    {
      id: 3,
      img: "/assets/img/home-04/hero/heroImg4.png",
      title1: "Where Fire",
      title2: "Meets Form",
      desc: "Discover the art of metal, movement, and meaning at Tyrone Ferguson Studios — a space where imagination is shaped in flame and formed by hand.",
      btn: "Visit the Studio",
    },
  ];

  return (
    <div className="tp-hero-2-area tp-hero-2-pt" style={{ paddingTop: "100px" }}>
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              pagination={{ clickable: false }}
             autoplay={{
                delay: 4000,            // 4 seconds between slides
                disableOnInteraction: false, // continue autoplay even if user interacts
              }}
              // autoplay={{delay: 4000,  disableOnInteraction: true }}
              loop={true}  
              className="tp-hero-2-wrapper-main"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="tp-hero-2-wrapper d-flex align-items-center p-relative">
                    {/* Background */}
                    <div className="tp-hero-2-bg tp-gsap-bg tp-hero-bg-single relative">
                      <Image
                        src={slide.img}
                        alt="Hero Background"
                        width={1920}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/50 z-10"></div>
                    </div>

                    {/* Content */}
                    <div className="tp-hero-2-content-wrap p-relative z-20 text-white text-center">
                      <div className="tp-hero-2-title-box">
                        <h2 className="tp-hero-2-title text-1">{slide.title1}</h2>
                        <h2 className="tp-hero-2-title text-2">
                          <span>{slide.title2}</span>
                        </h2>
                      </div>

                      <div className="tp-hero-2-content">
                        <p>{slide.desc}</p>
                        <Link className="tp-btn-white" href="#">
                          {slide.btn}
                          <span>
                            <Leaf />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
