import React from "react";
import imgOne from "../../../public/assets/img/blog/details/me.png";
import Image from "next/image";
const BlogWidgetAbout = () => {
  return (
    <>
      <div className="widget mb-40">
        <div className="widget-title-box mb-30">
          <span className="animate-border"></span>
          <h3 className="widget-title">About Me</h3>
        </div>
        <div className="about-me text-center">
          <Image src={imgOne} alt="" />
          <h4>Zulia Maron Duo</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="widget-social-icon">
            <a href="#">
              <i className="fab fa-facebook-f"> </i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"> </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"> </i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"> </i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWidgetAbout;
