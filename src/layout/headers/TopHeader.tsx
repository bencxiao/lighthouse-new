import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import flagLogo from "../../../public/assets/img/icon/flag.png"

const TopHeader = () => {
    return (
        <>
            <div className="header-top-area grey-bg d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
                        <div className="header-info">
                            <span><i className='far fa-map-marker-alt'></i>#9, 1431 40 AVE NE, Calgary</span>
                            {/* <span className="header-ph"><i className="fas fa-phone"></i>(587) 998-8287</span> */}
                            <span className="header-en"><i className='fas fa-envelope-open'></i>info@yyclighthouse.com</span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="header-right f-right ">
                            <div className="header-lang  pos-rel f-right">
                                <div className="lang-icon">
                                    {/*<Link className='lang-icon-img' href="/">*/}
                                    {/*    <Image src={flagLogo} style={{ width: "100%", height: "auto" }} alt='flag'  />*/}
                                    {/*</Link>*/}
                                    {/*<Link href="#">English <i className='fas fa-angle-down'></i></Link>*/}
                                </div>
                                {/*<ul className="header-lang-list">*/}
                                {/*    <li><Link href="">USA</Link></li>*/}
                                {/*    <li><Link href="">UK</Link></li>*/}
                                {/*    <li><Link href="">CA</Link></li>*/}
                                {/*    <li><Link href="">AU</Link></li>*/}
                                {/*</ul>*/}
                            </div>
                            <div className="header-icon f-right">
                                <Link href="https://www.linkedin.com/company/lighthouse-consulting-yyc"><i className='fab fa-linkedin-in'></i></Link>
                                <Link href=""><i className='fab fa-twitter'></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TopHeader;
