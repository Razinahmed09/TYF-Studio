import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Link from "next/link";
import Marquee from 'react-fast-marquee';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';
import g_1 from '@/assets/img/products/Ash Hymn-min.jpg';
import g_2 from '@/assets/img/products/Becoming-min.jpg';
import g_3 from '@/assets/img/products/Continuum-min.jpg';
import g_4 from '@/assets/img/products/Echo Forge-min.jpg';
import g_5 from '@/assets/img/products/Held Breath-min.jpg';
import g_6 from '@/assets/img/products/Invocation-min.jpg';
import g_7 from '@/assets/img/products/Listening Stone-min.jpg';
import g_8 from '@/assets/img/products/Memory Threshold-min.jpg';
import g_9 from '@/assets/img/products/Offering-min.jpg';
import g_10 from '@/assets/img/products/Pulsework-min.jpg';
import g_11 from '@/assets/img/products/Ritual Weight-min.jpg';
import g_12 from '@/assets/img/products/Rust Prayer-min.jpg';
import { ArrowBg, RightArrowTwo,FirstBracket, FirstBracketTwo } from "../svg";


const gallery_images = [
  g_1, g_2, g_3, g_4, g_5, g_6, g_7, g_8, g_9, g_10, g_11, g_12
]

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative">
      <div className='py-5'>
        <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom text-black text-center ">Discover Our Collections</h4>
        <p className="mb-30 tp_fade_bottom text-black text-center" style={{maxWidth: "700px", margin: "0 auto"}}>From essentials to statement pieces, our collections are designed to inspire. Browse and find what speaks to you.</p>
      </div>
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
       
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                
                <Marquee className="tp-gallery-titming" speed={100} direction='left'>

                  {gallery_images.map((g, i) => (

                    <div key={i}>
                      <div className="tp-gallery-item mr-30">
                        <Image src={g} alt="gallery-img" style={{ height: '600px' }} />
                      </div>
                    </div>
                  ))}

                </Marquee>
                <div className='d-flex justify-content-center py-5'>
                <Link className="tp-btn-black-2 tp_fade_bottom" href="#">
                Explore More
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
    </div>
  )
}
