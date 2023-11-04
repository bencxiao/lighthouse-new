"use client"
import React from "react";
import brandOne from "../../../public/assets/img/brand/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png";
import brandTwo from "../../../public/assets/img/brand/Microsoft_Azure_Logo.svg";
import brandThree from "../../../public/assets/img/brand/Synology.png";
import brandFour from "../../../public/assets/img/brand/t_google-cloud.jpg";
import brandFive from "../../../public/assets/img/brand/Microsoft_365_Stacked.svg";
import brandSix from "../../../public/assets/img/brand/zoom.png";
import brandSeven from "../../../public/assets/img/brand/lenovo-logo.png";
import brandEight from "../../../public/assets/img/brand/Dell_Logo.svg";
import brandNine from "../../../public/assets/img/brand/HP.png";
import brandTen from "../../../public/assets/img/brand/Samsung.png";


import Image from "next/image";
import "swiper/css/bundle";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Brand = () => {
  const brandLogos = [
    {
      id: 1,
      logo: brandOne,
    },
    {
      id: 2,
      logo: brandTwo,
    },
    {
      id: 3,
      logo: brandThree,
    },
    {
      id: 4,
      logo: brandFour,
    },
    {
      id: 5,
      logo: brandFive,
    },
    {
      id: 6,
      logo: brandSix,
    },
    {
      id: 7,
      logo: brandSeven,
    },
    {
      id: 8,
      logo: brandEight
    },
    {
      id: 9,
      logo: brandNine
    },
    {
      id: 10,
      logo: brandTen
    }
  ];

  return (
    <div className="brand-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
            <div className="section-title section-title-black text-center ml-50 mr-50 mb-75">
              <h1> Our Valuable Partners </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              autoplay={{delay: 1000}}
              spaceBetween={70}
              loop={true}
              observeParents={true}
              observer={true}
              centeredSlides={false}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1400: {
                  slidesPerView: 5,
                },
                1700: {
                  slidesPerView: 5,
                },
              }}
              navigation={{
                nextEl: ".bd-amenities-slider-next",
                prevEl: ".bd-amenities-slider-prev",
              }}
            >
              {brandLogos.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="brand-img">
                    <Image src={item.logo} alt="" style={{maxHeight: "77px", width: "auto", marginLeft: "auto", marginRight: "auto", display: "block"}} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
