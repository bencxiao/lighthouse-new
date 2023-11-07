import React from 'react';

const ContactArea = () => {
    return (
        <>
           <section className="contact-info-area" >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact text-center mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                    <i className='fas fa-envelope-open'> </i>
                                    <h3>Mail Here</h3>
                                    <p>info@yyclighthouse.com</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact text-center mb-30"  style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                    <i className='fas fa-map-marker-alt'> </i>
                                    <h3>Visit Here</h3>
                                    <p>#9 1431 40 AVE NE, Calgary, Alberta</p>
                                </div>
                            </div>
                            <div className="col-xl-4  col-lg-4 col-md-4 ">
                                <div className="contact text-center mb-30" style={{ background: "url(assets/img/bg/contact-bg.png)" }}>
                                    <i className='fas fa-phone'> </i>
                                    <h3>Call Us Now</h3>
                                    <p>+1 (587) 998-8287</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
        </>
    );
};

export default ContactArea;