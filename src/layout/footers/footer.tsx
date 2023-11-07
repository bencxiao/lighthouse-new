import Link from 'next/link';
import React from 'react';
import footerImg from "../../../public//assets/img/logo/logo.png"
import imgOne from "../../../public/assets/img/footer/01.jpg"
import imgTow from "../../../public/assets/img/footer/02.jpg"
import Image from 'next/image';
import FooterBottom from './FooterBottom';

const FooterOne = () => {
  return (
    <>
            <footer>
            <div className="footer-area grey-bg pt-80 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <div className="footer-logo">
                                    <Link href="/">
                                        <Image src={footerImg}
                                               style={{ width:'auto', height: '100%', maxHeight: '102px' }}
                                               alt="flag" />
                                    </Link>
                                </div>
                                <div className="footer-text">
                                    <p>We are a team of enthusiastic IT gurus. All of us are geared with multiple technology skills, including Cloud technology, software and hardware debug skills, as well as choosing the vendor and technology best fit your business. </p>
                                </div>
                                <div className="footer-icon">
                                    <Link href="https://www.linkedin.com/company/lighthouse-consulting-yyc"><i className='fab fa-linkedin-in'></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Our Services</h4>
                                <ul className="fotter-menu">
                                    <li><Link href="/service-1">Managed IT Service</Link></li>
                                    <li><Link href="/service-1">Cloud Solution</Link></li>
                                    <li><Link href="/service-1">IT Consultancy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Quick Links</h4>
                                <ul className="fotter-menu">
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/goals">Need a Consultant?</Link></li>
                                    <li><Link href="/service-1">Our Services</Link></li>
                                    <li><Link href="/faq">Have Any Questions?</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/*<div className="col-xl-3 col-lg-3 col-md-6">*/}
                        {/*    <div className="footer-wrapper mb-30">*/}
                        {/*        <h4 className="footer-title">Recent News</h4>*/}
                        {/*        <div className="footer-news">*/}
                        {/*            <ul>*/}
                        {/*                <li>*/}
                        {/*                    <div className="footer-news-img">*/}
                        {/*                        <Link href="/blog"><Image src={imgOne} alt="" /></Link>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="footer-news-text">*/}
                        {/*                        <h5><Link href="/blog">Building Real Time Charts With Grap HQL & Postgres</Link></h5>*/}
                        {/*                    </div>*/}
                        {/*                </li>*/}
                        {/*                <li>*/}
                        {/*                    <div className="footer-news-img">*/}
                        {/*                        <Link href="/blog"><Image src={imgTow} alt="" /></Link>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="footer-news-text">*/}
                        {/*                        <h5><Link href="/blog">How To Build An Endless Runner Or Virtual Reality</Link></h5>*/}
                        {/*                    </div>*/}
                        {/*                </li>*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Contact Us</h4>
                                <div className="footer-info">
                                    <p>Reach out to us!</p>
                                </div>
                                <ul className="contact-link">
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>+1 (587) 998-8287</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>info@yyclighthouse.com</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>1431 40 Ave NE, Calgary, AB T2E 8N6</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBottom/>
            </div>
        </footer>
    </>
  );
};

export default FooterOne;