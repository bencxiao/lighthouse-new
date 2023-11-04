"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
const TestimonialDefault = () => {
  const testimonialData = [

    {
      id: 1,
      details:
        "Lighthouse has been dedicated to helping our firm with qualitative and timely managed IT service for more than 5 years. They have been an important success factor in our firm's business expansion, will always recommend!",
      name: "Carrie",
      title: "CPA, Accounting Firm Partner",
    },
    {
      id: 2,
      details:
          "Lighthouse helped me with coming up a quick solution for my temporary clinic, as well as a permanent software and hardware solution in my new clinic. They were also very knowledgeable and were able to provide training to my employees, arming them with latest IT knowledge.",
      name: "James",
      title: "Family Doctor",
    },
    {
      id: 3,
      details:
          "These guys were trustworthy and responsive. Helped me quickly with my software problem. I didn't know they also had good knowledge on online advertisement, that was an extra point why I would recommend them!",
      name: "Lin",
      title: "Architectural Business Owner",
    },
  ];
  return (
    <>
      <div className="testimonial-area">
        <Swiper
          modules={[Scrollbar, A11y, Autoplay, Navigation]}
          spaceBetween={0}
          loop={true}
          observeParents={true}
          observer={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation={{
            nextEl: ".case-button-next",
            prevEl: ".case-button-prev",
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonialData?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-wrapper col">
                <div className="testimonial-text">
                  <p>{item.details}</p>
                  <h4> {item.name} </h4>
                  <span> {item.title} </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="bd-trending__navigations">
          <button className="case-button-prev navigation-preview arrow-button">
            <i className="fa-regular fa-angle-left"></i>
          </button>
          <button className="case-button-next navigation-next arrow-button">
            <i className="fa-regular fa-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonialDefault;
