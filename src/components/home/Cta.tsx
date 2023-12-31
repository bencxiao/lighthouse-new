import Link from 'next/link';
import React from 'react';

const Cta = () => {
    return (
        <>
            <div className="cta-area pt-125 pb-95" style={{ background: "url(assets/img/bg/bg-2.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="cta-text mb-30">
                            <span>do you have any project ?</span>
                            <h1>Let’s Talk About Your Next Passion!</h1>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="cta-button text-lg-right mb-30">
                            <Link className="btn btn-white btn-none" href="/contact"><span className="btn-text">Contact us<i className='fas fa-long-arrow-alt-right'></i></span></Link>
                            {/*<Link className="cta-link" href="to:+81234578988"><i className='fas fa-phone'></i>(587) 998-8287</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cta;