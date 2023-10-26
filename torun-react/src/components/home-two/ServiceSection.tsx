import React from "react";
import Link from "next/link";
import imgOne from "../../../public/assets/img/service/ser-01.jpg";
import imgTwo from "../../../public/assets/img/service/ser-02.jpg";
import imgThree from "../../../public/assets/img/service/ser-03.jpg";
import imgFour from "../../../public/assets/img/service/ser-04.jpg";
import Image from "next/image";
const ServiceSection = () => {
  return (
    <div className="our-services-area grey-bg-2 pt-120 pb-130 pr-45 pl-45">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
            <div className="section-title text-center ml-50 mr-50 mb-85">
              <span className="border-left-1"></span>
              <span>what we do</span>
              <span className="border-right-1"></span>
              <h1>We provide exclusive services for your busainess</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="our-services-wrapper mb-30">
              <div className="our-services-img">
                <Image src={imgOne} alt="" />
              </div>
              <div className="our-services-content">
                <div className="our-services-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <div className="our-services-text">
                  <h3>Product Design</h3>
                  <p>
                    Set perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium demqu laudantium totam rem aperiam{" "}
                  </p>
                  <Link href="/service-manage">
                    view more <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="our-services-wrapper mb-30">
              <div className="our-services-img">
                <Image src={imgTwo} alt="" />
              </div>
              <div className="our-services-content">
                <div className="our-services-icon">
                  <i className="fas fa-laptop-code"> </i>
                </div>
                <div className="our-services-text">
                  <h3>UX/UI Strategy</h3>
                  <p>
                    Set perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium demqu laudantium totam rem aperiam{" "}
                  </p>
                  <Link href="/service-manage">
                    view more <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="our-services-wrapper mb-30">
              <div className="our-services-img">
                <Image src={imgThree} alt="" />
              </div>
              <div className="our-services-content">
                <div className="our-services-icon">
                  <i className="fas fa-chart-bar"> </i>
                </div>
                <div className="our-services-text">
                  <h3>IT Marketing</h3>
                  <p>
                    Set perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium demqu laudantium totam rem aperiam{" "}
                  </p>
                  <Link href="/service-manage">
                    view more <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="our-services-wrapper mb-30">
              <div className="our-services-img">
                <Image src={imgFour} alt="" />
              </div>
              <div className="our-services-content">
                <div className="our-services-icon">
                  <i className="fas fa-fingerprint"> </i>
                </div>
                <div className="our-services-text">
                  <h3>Web Security</h3>
                  <p>
                    Set perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium demqu laudantium totam rem aperiam{" "}
                  </p>
                  <Link href="/service-manage">
                    view more <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="services-button text-center mt-30">
              <Link className="btn" href="/service-1">
                <span className="btn-text">
                  view All Services{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
