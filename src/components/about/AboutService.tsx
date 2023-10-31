"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const AboutService = () => {
  const path = usePathname()
  return (
    <>
      <div className={`services-area  ${path === "/service-2" || "/service-manage" ? "" : "pb-100"}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="single-services text-center">
                <div className="services-icon">
                  <i className="fas fa-laptop-code"> </i>
                </div>
                <div className="services-text">
                  <h3>Web Development</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                  <Link href="/service-manage">
                    <span className="services-button">
                      read more <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="single-services active text-center">
                <div className="services-icon">
                  <i className="fas fa-database"> </i>
                </div>
                <div className="services-text">
                  <h3>Database Analysis</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                  <Link href="/service-manage">
                    <span className="services-button">
                      read more <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="single-services text-center">
                <div className="services-icon">
                  <i className="fas fa-server"> </i>
                </div>
                <div className="services-text">
                  <h3>Server Security</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking{" "}
                  </p>
                  <Link href="/service-manage">
                    <span className="services-button">
                      read more <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutService;
