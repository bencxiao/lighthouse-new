import React from 'react';

const Contact = () => {
    
    return (
        <div className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
                        <div className="section-title section-title-white text-center ml-50 mr-50 mb-75">
                            <span className="border-left-1"></span>
                            <span>contact us</span>
                            <span className="border-right-1"></span>
                            <h1> {`Don't`} Hesitate To Contact Us</h1>
                        </div>
                    </div>
                </div>
                <div className="contact-bg">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 mb-30">
                            <div className="map-wrapper">
                                <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24187.924717451475!2d-74.17913762136895!3d40.72922934784896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1655544592973!5m2!1sen!2sbd"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 mb-30">
                            <div className="appointment-wrapper">
                                <form id="appointment-form" action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-box user-icon mb-30">
                                                <input type="text" name="name" placeholder="Full Name Here" />
                                                <span><i className='fas fa-user'></i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-box email-icon mb-30">
                                                <input type="text" name="email" placeholder="Email Here" />
                                                <span><i className='fas fa-envelope'></i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box date-icon mb-30">
                                                <input type="text" name="text" placeholder="Subject" />
                                                <span><i className='fas fa-chevron-down'></i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box message-icon mb-30">
                                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Write message"></textarea>
                                                <span><i className='fas fa-pencil-alt'></i></span>
                                            </div>
                                            <div className="contact-btn">
                                                <button className="btn" type="submit"><span className="btn-text">send message <i className='fas fa-long-arrow-alt-righ'></i></span> <span className="btn-border"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;