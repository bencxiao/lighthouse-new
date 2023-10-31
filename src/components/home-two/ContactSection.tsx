import React from "react";
import imgOne from "../../../public/assets/img/bg/map.png";
import Image from "next/image";
const ContactSection = () => {
  return (
    <div className="contact-2-area pt-130 pb-100 theme-bg ">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7 ">
            <div className="contact-wrapper mb-30">
              <div className="section-title section-title-white mb-25">
                <span className="b-sm-left-2"></span>
                <span className="sub-t-left">contact us</span>
                <h1>
                  {`Don't`} Hesitate To <br /> Contact Us
                </h1>
              </div>
              <form action="assets/mail.php" id="contact-form">
                <div className="row">
                  <div className="col-xl-6 mb-10">
                    <div className="form-2-box user-icon mb-10">
                      <input
                        name="name"
                        placeholder="Full Name Here"
                        type="text"
                      />
                      <span>
                        <i className="fas fa-user"> </i>
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-6 mb-10">
                    <div className="form-2-box email-2-icon mb-10">
                      <input
                        name="email"
                        placeholder="Email Address"
                        type="email"
                      />
                      <span>
                        <i className="fas fa-envelope"> </i>
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-12 mb-35">
                    <div className="form-2-box sub-icon mb-10">
                      <input name="subject" placeholder="Subject" type="text" />
                      <span>
                        <i className="fas fa-chevron-down"> </i>
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-12 mb-30">
                    <div className="form-2-box message-2-icon mb-10">
                      <textarea
                        name="message"
                        cols={30}
                        rows={10}
                        placeholder="Message"
                        id="message"
                      ></textarea>
                      <span>
                        <i className="fas fa-pencil-alt"> </i>
                      </span>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <button className="btn" type="submit">
                      <span className="btn-texts">
                        send message <i className="far fa-long-arrow-right"></i>
                      </span>{" "}
                      <span className="btn-border"></span>
                    </button>
                  </div>
                </div>
                <p className="form-message"></p>
              </form>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="map-img mb-30">
              <Image style={{ width: "100%", height: "auto" }} src={imgOne} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
