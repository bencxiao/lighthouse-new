import Link from 'next/link';
import React from 'react';
import aboutImg from "../../../public/assets/img/about/close-up-of-experienced-male-it-engineer-using-new-software_333x500.jpg"
import aboutTwo from "../../../public/assets/img/about/01.png"
import Image from 'next/image';
const About = () => {
    return (
        <>
            <div className="about-area pt-130 pb-100">
            <div className="container">   
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-text">
                            <span>who we are</span>
                            <h1>More than 8+ years we provide <span>IT solutions </span></h1>
                            <p>We adapt to the latest trend of technology and we will arm your business with cutting edge productivity solutions.</p>
                            <Link href="/service-1">Our Services <i className='fas fa-long-arrow-alt-right'></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-img">
                            <Image src={aboutImg} style={{ width: "100%", height: "auto" }} alt="about-img" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-content">
                            <p>We are a team of enthusiastic IT gurus. All of us are geared with multiple technology skills, including Cloud technology, software and hardware debug skills, as well as choosing the vendor and technology best fit your business.</p>
                            {/*<div className="about-1-img">*/}
                            {/*    <Image src={aboutTwo} style={{ width: "auto", height: "auto" }} alt="about-img" />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </>
    );
};

export default About;