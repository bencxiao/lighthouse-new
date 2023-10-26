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
                                        <Image src={footerImg}  alt="flag" />
                                    </Link>
                                </div>
                                <div className="footer-text">
                                    <p>At  1vero eoset accusamus et iusto odio dignissimos ducimus qui blpraesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
                                </div>
                                <div className="footer-icon">
                                    <a href="#"><i className='fab fa-facebook-f'></i></a>
                                    <a href="#"><i className='fab fa-twitter'></i></a>
                                    <a href="#"><i className='fab fa-instagram'></i></a>
                                    <a href="#"><i className='fab fa-youtube'></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Our Services</h4>
                                <ul className="fotter-menu">
                                    <li><Link href="/service-1">User Strategy</Link></li>
                                    <li><Link href="/service-1">Product Designing</Link></li>
                                    <li><Link href="/service-1">Marketing Strategy</Link></li>
                                    <li><Link href="/service-1">IT Consultancy</Link></li>
                                    <li><Link href="/service-1">Server Security</Link></li>
                                    <li><Link href="/service-1">Product Marketing</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Quick Links</h4>
                                <ul className="fotter-menu">
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/goals">Need a Consultant?</Link></li>
                                    <li><Link href="/service-1">Our Services</Link></li>
                                    <li><Link href="/faq">Have Any Questions?</Link></li>
                                    <li><Link href="/team">Meet Our Team</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Recent News</h4>
                                <div className="footer-news">
                                    <ul>
                                        <li>
                                            <div className="footer-news-img">
                                                <Link href="/blog"><Image src={imgOne} alt="" /></Link>
                                            </div>
                                            <div className="footer-news-text">
                                                <h5><Link href="/blog">Building Real Time Charts With Grap HQL & Postgres</Link></h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="footer-news-img">
                                                <Link href="/blog"><Image src={imgTow} alt="" /></Link>
                                            </div>
                                            <div className="footer-news-text">
                                                <h5><Link href="/blog">How To Build An Endless Runner Or Virtual Reality</Link></h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="footer-wrapper mb-30">
                                <h4 className="footer-title">Contact Us</h4>
                                <div className="footer-info">
                                    <p>But I must explain to you
                                        how all this mistaken</p>
                                </div>
                                <ul className="contact-link">
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>+812  (345) 778 88</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>support@gmail.com</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-address-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="contact-address-text">
                                            <h4>227 Marion Street, Columbia</h4>
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