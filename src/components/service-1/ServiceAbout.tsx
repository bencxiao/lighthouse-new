import React from 'react';
import ServiceVideo from './ServiceVideo';
import ManagedITServices from "@/sheardComponent/ManagedITServices";
import Image from "next/image";
import aboutOne from "../../../public/assets/img/about/it-service-and-man-fixing-a-pc_1_550x367.jpg";
import aboutTwo from "../../../public/assets/img/about/computer-chip-on-a-part-of-electronic-board_538x514.jpg";

const ServiceAbout = () => {
    return (
        <>
             <div className="about-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <ServiceVideo />
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-10">
                            <div className="faq-wrapper">
                                <div className="section-title mb-25">
                                    <span className="b-sm-left-1"></span>
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">Managed IT Services</span>
                                    <h1>Why Most People Choose Our Business Solutions</h1>
                                </div>
                                <div className="faq-box">
                                    <ManagedITServices />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-area pt-130 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 mb-10">
                            <div className="faq-wrapper">
                                <div className="section-title mb-25">
                                    <span className="b-sm-left-1"></span>
                                    <span className="b-sm-left-2"></span>
                                    <span className="sub-t-left">Benefits of Managed IT Services</span>
                                    <h1>Why would you need managed IT services</h1>
                                </div>
                                <div className="faq-box">
                                    <p>Businesses opt for managed IT services for several compelling reasons, and these services play a crucial role in supporting the overall health and efficiency of an organization's IT infrastructure. Here are key reasons why businesses often choose managed IT services:</p>
                                    <ul>
                                        <li>
                                            <b>Cost Efficiency</b>
                                            <p><b>Predictable Costs</b>: Managed IT services typically operate on a subscription-based model, providing businesses with predictable monthly expenses. This can be more cost-effective than hiring and maintaining an in-house IT team with fluctuating workloads.</p>
                                        </li>
                                        <li>
                                            <b>Focus on Core Competencies</b>
                                            <p><b>Business Focus</b>: Outsourcing IT management allows businesses to concentrate on their core competencies. Instead of dealing with IT issues, management can focus on strategic initiatives, improving products or services, and growing the business.</p>
                                        </li>
                                        <li>
                                            <b>24/7 Support</b>
                                            <p><b>Continuous Support</b>: Many managed IT service providers offer round-the-clock support. This ensures that critical systems and services are monitored and supported at all times, minimizing disruptions and downtime.</p>
                                        </li>
                                        <li>
                                            <b>Improved Productivity</b>
                                            <p><b>Efficient IT Operations</b>: With a well-managed IT infrastructure, employees experience fewer technical disruptions, leading to increased productivity. Quick issue resolution and reliable systems contribute to a smoother workflow.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="single-about">
                                <div className="about-us-img">
                                    <Image src={aboutTwo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceAbout;