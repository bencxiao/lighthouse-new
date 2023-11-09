import React from 'react';
import thumbOne from "../../../public/assets/img/about/computer-chip-on-a-part-of-electronic-board_538x514.jpg"
import Image from 'next/image';
import Link from 'next/link';
const AboutArea = () => {
    return (
        <>
            <div className="about-area pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="about-2-img">
                                    <Image src={thumbOne} alt="img-data" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="about-1-wrapper">
                                    <div className="about-text">
                                        <span>who we are</span>
                                        <h1>More than 8 + years we provide <span>IT solutions </span></h1>
                                        <p>Over the past eight years, Lighthouse Consulting has consistently been the guiding light for Calgary&apos;s SMB community. We are dedicated to delivering tailored solutions that align with the specific needs and goals of each client. Whether it&apos;s optimizing IT infrastructure through our managed services, implementing secure and scalable cloud solutions, or offering expert IT consultancy, we take pride in helping SMBs harness the power of technology to achieve their business objectives. With Lighthouse Consulting by your side, you can navigate the ever-evolving IT landscape with confidence, knowing that we&apos;re committed to your success.</p>
                                    </div>
                                    {/*<div className="about-button">*/}
                                    {/*    <Link className="btn" href="/goals"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'></i></span></Link>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default AboutArea;