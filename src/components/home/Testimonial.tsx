import React from 'react';
import thumb from "../../../public/assets/img/testimonial/confident-young-professional-in-a-meeting.jpg"
import Image from 'next/image';
import TestimonialDefault from './TestimonialDefault';
const Testimonial = () => {
    return (
        <>
             <div className="testimonial-area testimonial pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 mb-30">
                        <div className="section-title  mb-45">
                            <span className="b-sm-left-1"></span>
                            <span className="b-sm-left-2"></span>
                            <span className="sub-t-left">Testimonials</span>
                            <h1>What Our Clients Say About us</h1>
                        </div>
                         <TestimonialDefault/>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="testimonial-img">
                            <Image  style={{ width: "auto", height: "100%" }} src={thumb} alt="testimonial" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Testimonial;