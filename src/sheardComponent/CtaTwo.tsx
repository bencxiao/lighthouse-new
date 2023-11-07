import Link from "next/link";
import React from "react";

const CtaTwo = () => {
  return (
    <>
      <div
        className="cta-area pt-125 pb-95"
        style={{ background: "url(assets/img/bg/bg-2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="cta-text mb-30">
                <span>Where is your next exciting project ?</span>
                <h1>{`Let’s`} chat about your next passion! </h1>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="cta-button text-lg-right mb-30">
                <Link className="btn btn-white btn-none" href="/contact">
                  <span className="btn-text">
                    contact us <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaTwo;
