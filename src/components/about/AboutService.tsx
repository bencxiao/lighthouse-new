"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {serviceDataTwo} from "@/data/service-data-two";
import Image from "next/image";
const AboutService = () => {
  const path = usePathname()
  return (
    <>
      <div className={`services-area  ${path === "/service-2" || "/service-manage" ? "" : "pb-100"}`}>
        <div className="container">
          <div className="row">
            {serviceDataTwo.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="services-wrapper text-center">
                    <div className="services-img">
                      <Image src={item.img} alt="" />
                    </div>
                    <div className="services-text">
                      <h3> {item.title} </h3>
                      <p> {item.details} </p>
                      <Link href="/service-1">
                      <span className="services-button">
                        read more{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                      </Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutService;
