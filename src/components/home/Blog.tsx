import React from "react";
import Link from "next/link";
import blogOne from "../../../public/assets/img/blog/blog-1.jpg";
import blogTwo from "../../../public/assets/img/blog/blog-2.jpg";
import blogThree from "../../../public/assets/img/blog/blog-3.jpg";
import Image from "next/image";
const BlogGrid = () => {
  return (
    <div className="blog-area pt-120">
      <div className="container">
        <div className="row mb-55">
          <div className="col-xl-6 col-lg-6 col-md-8 mb-30">
            <div className="section-title">
              <span className="b-sm-left-1"></span>
              <span className="b-sm-left-2"></span>
              <span className="sub-t-left">our blog</span>
              <h1>
                Reads Our Latest <br /> News & Blog
              </h1>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-4 mb-30">
            <div className="bolg-top-button text-md-right mt-90">
              <a className="btn" href="#">
                <span className="btn-text">
                  view all News <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 mb-30">
            <div className="blog-wrapper">
              <div className="blog-img">
                <Link href="/blog-details">
                  <Image src={blogOne} alt="img" />
                </Link>
              </div>
              <div className="blog-meta">
                <span>
                  {" "}
                  <i className="fas fa-user"> </i> Soamlia
                </span>
                <span>
                  {" "}
                  <i className="fas fa-calendar"> </i> 05 Aug 2019
                </span>
                <span>
                  {" "}
                  <i className="fas fa-comments"> </i> (03)
                </span>
              </div>
              <div className="blog-text">
                <h3>
                  <Link href="/blog-details">
                    Monthly Web Development To Update React Hooks Cons
                  </Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque{" "}
                </p>
                <Link href="/blog-details">
                  <span className="blog-button">
                    read more <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="blog-border mb-30">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-img">
                    <Link href="/blog-details">
                      <Image src={blogTwo} alt="img" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="single-blog">
                    <div className="blog-meta">
                      <span>
                        {" "}
                        <i className="fas fa-user"> </i> Soamlia
                      </span>
                      <span>
                        {" "}
                        <i className="fas fa-calendar"> </i> 05 Aug 2019
                      </span>
                      <span>
                        {" "}
                        <i className="fas fa-comments"> </i> (03)
                      </span>
                    </div>
                    <div className="blog-text">
                      <h3>
                        <Link href="/blog-details">
                          How To Find And Make The Most Of The Unplanned
                        </Link>
                      </h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-border mb-30">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-img">
                    <Link href="/blog-details">
                      <Image src={blogThree} alt="img" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="single-blog">
                    <div className="blog-meta">
                      <span>
                        {" "}
                        <i className="fas fa-user"> </i> Soamlia
                      </span>
                      <span>
                        {" "}
                        <i className="fas fa-calendar"> </i> 05 Aug 2019
                      </span>
                      <span>
                        {" "}
                        <i className="fas fa-comments"> </i> (03)
                      </span>
                    </div>
                    <div className="blog-text">
                      <h3>
                        <Link href="/blog-details">
                          Meet Art Direction For The Web Smashing Books
                        </Link>
                      </h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
