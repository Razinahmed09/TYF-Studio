import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UpArrow } from "../svg";
// images
import shape from '@/assets/img/home-03/about/ab-shape-img.png';
import m_img_1 from "@/assets/img/home-04/about/tyf-person.png";
// import m_img_2 from "@/assets/img/home-04/hero/slideimage01.png";

export default function MissionOne() {
  return (
    <div className="tp-mission-area pt-120 pb-120 mb-110 black-bg p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-mission-title-box mb-80 text-center">
              <h4 className="tp-about-5-title tp_fade_bottom p-relative">
                <span className="tp-about-5-subtitle d-none d-lg-block tp_fade_left"> 
                 Our Approach
                </span>
                TYF Studio —  <br />  Hand-Forged Art & Sculptural Design
              </h4>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-mission-thumb">
              <Image
                data-speed=".8"
                src={m_img_1}
                alt="thumb-img"
                style={{ height: "auto" }}
                
              />
              <div className="tp-about-3-shape text-lg-end">
              <Image src={shape} alt="shape" style={{ height: "auto", filter: "invert(1)" }} />
            </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-mission-content">
              <p className="tp_fade_bottom">
                At TYF Studio, we combine deep research, creative design, and thoughtful execution to build products and experiences that matter. Our approach is rooted in understanding your business, your users, and the bigger world around you — so we create with meaning, not just style.
              </p>
              <div className="tp-hover-btn-wrapper tp_fade_bottom">
                <Link
                  className="tp-btn-circle-2 tp-hover-btn-item tp-hover-btn"
                  href="#"
                >
                  <span>
                    <UpArrow />
                    <br />
                    About us
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-mission-right-thumb">
        {/* <Image
          data-speed=".9"
          src={m_img_2}
          alt="thumb-img"
          style={{ height: "auto" }}
        /> */}
      </div>
    </div>
  );
}
