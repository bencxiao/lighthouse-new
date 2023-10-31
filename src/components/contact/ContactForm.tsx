import React from 'react';

const ContactForm = () => {
    return (
        <>
             <div className="contact-2-area pt-120 pb-130">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                                <div className="section-title text-center ml-50 mr-50 mb-75">
                                    <span className="border-left-1"></span>
                                    <span>contact us</span>
                                    <span className="border-right-1"></span>
                                    <h1>{`Don't`} Hesitate To Contact Us</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="appointment-wrapper contact-form-page">
                                <form className="appointment-form">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-box user-icon mb-30">
                                                <input type="text" name="name" placeholder="Full Name Here" />
                                                <span><i className='fas fa-user'> </i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-box email-icon mb-30">
                                                <input type="text" name="email" placeholder="Email Here" />
                                                <span><i className='fas fa-envelope'> </i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-box date-icon mb-30">
                                                <input type="text" name="text" placeholder="Subject" />
                                                <span><i className='fas fa-chevron-down'> </i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-box message-icon mb-30">
                                                <textarea name="message" id="message" cols={30} rows={10}
                                                    placeholder="Write message"></textarea>
                                                <span><i className='fas fa-pencil-alt'> </i></span>
                                            </div>
                                            <div className="contact-btn contact-2-btn text-center">
                                                <button className="btn" type="submit"><span className="btn-text">send message <i className='fas fa-long-arrow-alt-right'> </i></span> <span className="btn-border"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
        </>
    );
};

export default ContactForm;