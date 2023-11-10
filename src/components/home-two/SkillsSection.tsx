"use client"
import React from 'react';
import ProgressApp from './progress/ProgressApp';
import ProgressAppTwo from './progress/ProgressAppTwo';
import imgOne from "../../../public/assets/img/bg/vertical-photo-of-a-man-employs-cloud-based-computing-on-his-smartphone-_500x667.jpg"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ProgressBar from "@/components/home-two/progress/ProgressBar";
const SkillsSection = () => {
    const path = usePathname()
    return (
        <div className={`our-skills-area pt-130 ${path ==="/service-3" ? "" : "pb-100"}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 mb-30">
                        <div className="our-skills-img">
                            <Image style={{ width: "100%", height: "auto" }} src={imgOne} alt="skills-img" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="progress-wrapper mb-30">
                            <div className="section-title  mb-50">
                                <span className="b-sm-left-2"></span>
                                <span className="sub-t-left">Cloud Platforms</span>
                                <h1>We know cloud architecting, onboard to cloud today!</h1>
                                <p>We bring extensive expertise to the realm of cloud computing, specializing in Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Our deep understanding of these leading cloud services enables us to seamlessly guide businesses through the complexities of modern IT infrastructure. With a focus on tailoring solutions to clients' specific goals, we leverage the scalability of AWS, the integrated suite of services in Azure, and the cutting-edge technologies of GCP. At Lighthouse Consulting, we are your trusted partner in optimizing operations and unlocking the full potential of cloud computing.</p>
                            </div>
                            <div className="progress-bar-text">
                                <div className="progress-skill">
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>Amazon Web Services</h4>
                                        </div>
                                        <div className="ProgressApp">
                                            <ProgressBar bgcolor={"#ff9900"} completed={93} />
                                        </div>
                                    </div>
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>Microsoft Azure</h4>
                                        </div>
                                        <div className="ProgressApp">
                                            <ProgressBar bgcolor={"#245ca1"} completed={82} />
                                        </div>
                                    </div>
                                    <div className="single-skill mb-35">
                                        <div className="bar-title">
                                            <h4>Google Cloud Platform</h4>
                                        </div>
                                        <div className="ProgressApp">
                                            <ProgressBar bgcolor={"#af0c69"} completed={85} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsSection;