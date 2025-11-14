"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import ProjectFour from "@/components/project/project-four";



import { perspective } from "@/utils/perspective-anim";
import PerspectivePortfolioSlider from "@/components/portfolio/slider/perspective-port-slider";
import ThemeSetting from "@/components/theme-setting";



// import VideoThree from "@/components/video/video-three";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";

const HomeFourMain = () => {

  
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

   useEffect(() => {
      if (typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
        cursorAnimation();
      }
    }, []);

   useGSAP(() => {
      const timer = setTimeout(() => {
        perspective();
        revelAnimationOne();
      }, 100);
      return () => clearTimeout(timer);
    })
    
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
    <Wrapper>

      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

    {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
              {/* <HeroBannerTwo /> */}
            {/* hero area end */}

            {/* hero area start */}
              <HeroBannerFour />
            {/* hero area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            {/* brand area start */}
            {/* <BrandThree /> */}
            {/* brand area end */}


            {/* project area start */}
            <ProjectFour />
            {/* project area end */}

          
           
              {/* perspective area start */}
                <PerspectivePortfolioSlider />
              {/* perspective area end */}
           
                   

            {/* video area start */}
            {/* <VideoThree /> */}
            {/* video area end */}

            {/* service area start */}
            <ServiceFour />
            {/* service area end */}

            {/* contact area start */}
            <ContactOne />
            {/* contact area end */}

          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;
