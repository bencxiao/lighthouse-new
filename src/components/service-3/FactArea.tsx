import Link from "next/link";
import React from "react";
import ProgressBarCircle from "./ProgressBarCircle";

const FactArea = () => {
  return (
    <>
      <div
        className="fact-are-area pt-130 pb-100"
        style={{ background: "url(assets/img/bg/bg-9.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12 mb-30">
              <div className="fact-text text-left">
                <span>do you have any project ?</span>
                <h1>
                  Let’s Talk About <br /> Cloud Solutions
                </h1>
                <Link href="/contact">
                  contact us <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                  <div className="progress-wrapper">
                    <ProgressBarCircle percent={97} />
                    <div className="progress-content">
                      <h1>97%</h1>
                      <span>Happy Clients</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
                  <div className="progress-wrapper">
                    <ProgressBarCircle percent={58} />
                    <div className="progress-content">
                      <h1>58</h1>
                      <span>Cloud Project</span>
                    </div>
                  </div>
                </div>
                {/*<div className="col-xl-4 col-lg-4 col-md-4 mb-30">*/}
                {/*  <div className="progress-wrapper">*/}
                {/*    <ProgressBarCircle percent={90} />*/}
                {/*    <div className="progress-content">*/}
                {/*      <h1>90%</h1>*/}
                {/*      <span>Market Research</span>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactArea;
