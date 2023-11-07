import React from "react";
import bgImg from "../../../public/assets/img/shape/shape-1.png"
import Image from "next/image";
import Link from "next/link";
import { teamData } from "@/data/team-data";
const Team = () => {


  return (
    <>
      <div className="team-area pt-120 pb-100 pos-rel">
        <div className="shape d-none d-xl-block">
          <div className="shape-item team-01 bounce-animate">
            <Image src={bgImg} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row mb-50">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title  mb-30">
                <span className="b-sm-left-1"></span>
                <span className="b-sm-left-2"></span>
                <span className="sub-t-left">our Team</span>
                <h1>Meet Our Experienced Team Members</h1>
              </div>
            </div>
            {/*<div className="col-xl-5 offset-xl-3 col-lg-6">*/}
            {/*  <div className="team-section mb-30 z-index">*/}
            {/*    <p>*/}
            {/*      But I must explain to you how all this mistaken idea of*/}
            {/*      denouncing pleasure and praising pain was born and I will*/}
            {/*      give.*/}
            {/*    </p>*/}
            {/*    <Link className="btn" href="/contact">*/}
            {/*      */}
            {/*        <span className="btn-text">*/}
            {/*          join with us{" "}*/}
            {/*          <i className="fas fa-long-arrow-alt-right"></i>*/}
            {/*        </span*/}
            {/*    </Link>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="row">
            {teamData.slice(0,4).map((item) => (
                <>
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="team-wrapper">
                      <div className="team-img">
                        <Image style={{ width: "100%", height: "auto" }} src={item.img} alt="" />
                      </div>
                      <div className="team-text">
                        <h4> {item.name} </h4>
                        <span> {item.title} </span>
                        <div className="team-icon">
                          <Link href={item.linkedInLink}>
                            <i className={item.linkedIn}></i>
                          </Link>
                          <Link href={item.emailAdd}>
                            <i className="fas fa-envelope-open"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div key={item.id} className="col-xl-4 col-lg-4 mb-30">
                    <p>Ben Xiao is a dynamic leader and seasoned professional with a remarkable track record in the IT industry. As the President of Lighthouse Consulting for the past four years, he has leveraged his extensive expertise to drive the company's success and growth. Ben's journey to the top of Lighthouse Consulting was paved with valuable experiences gained during his tenure at industry giants such as Amazon AWS, Paysafe, and Mawer Investment Management. With over six years of experience as a software engineer, he brings a unique blend of technical proficiency and strategic vision to the helm of the company.</p>
                    <br/>
                    <p>Ben's leadership is characterized by a diverse skill set honed through his years in the field. He excels in cloud architecting, IT monitoring and management, IT consulting, and software and hardware consulting and purchasing, among other areas. His multifaceted approach has enabled Lighthouse Consulting to provide clients with comprehensive solutions that align with their evolving needs. Under his guidance, the company continues to be a beacon of innovation and expertise in the IT consultancy landscape, helping businesses navigate the complexities of the digital age with confidence and efficiency.</p>
                  </div>

                  </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
