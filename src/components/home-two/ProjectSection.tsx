"use client"
import React,{useState} from "react";
import Link from "next/link";
import { projectData } from "@/data/project-data";
import Image from "next/image";

const ProjectSection = () => {
    const [activeTab, setActiveTab] = useState<string>("Product")
  
  const tabData = [
    {
      id: 1,
      tab: "Product",
    },
    {
      id: 1,
      tab: "Development",
    },
    {
      id: 1,
      tab: "Software",
    },
    {
      id: 1,
      tab: "Design",
    },
  ];
  const filterData = projectData.filter((item)=> item.tag === activeTab)

  return (
    <div className="gallery-area pt-125 pb-130">
      <div className="container">
        <div className="row mb-40">
          <div className="col-xl-5 col-lg-5">
            <div className="section-title">
              <span className="b-sm-left-2"></span>
              <span className="sub-t-left">our project</span>
              <h1>Our Latest Case <br />  Studies</h1>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 mb-30">
            <div className="portfolio-menu mt-120 text-lg-right mb-30">
              <ul className="tab-menu">
                {tabData.map((item) => (
                  <li className={item.tab === activeTab ? "active-tab" : ""} onClick={()=> setActiveTab(item.tab)} key={item.id}>{item.tab}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="col-12">
              <div id="portfolio-grid" className="row row-portfolio">
                <div className="grid-sizer"></div>

              {
                activeTab === "Product"?
                <>
                  {projectData.slice(0,6).map((item) => (
                  <div
                    key={item.id}
                    className="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat3 mb-30"
                  >
                    <div className="portfolio-wrapper">
                      <div className="portfolio-img">
                        <Link href="/case-details">
                          <Image style={{ width: "100%", height: "auto" }} src={item.img} alt="project-img" />
                        </Link>
                        <div className="portfolio-text">
                          <span> {item.title} </span>
                          <h3>
                            <Link href="/case-details"> {item.details} </Link>
                          </h3>
                          <Link className="btn" href="/case-details">
                            <span className="btn-text">
                              learn more{" "}
                              <i className="fas fa-long-arrow-alt-right"></i>{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </>
                :
                <>
                 {filterData.map((item) => (
                  <div
                    key={item.id}
                    className="col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat3 mb-30"
                  >
                    <div className="portfolio-wrapper">
                      <div className="portfolio-img">
                        <Link href="/case-details">
                          <Image src={item.img} alt="project-img" />
                        </Link>
                        <div className="portfolio-text">
                          <span> {item.title} </span>
                          <h3>
                            <Link href="/case-details"> {item.details} </Link>
                          </h3>
                          <Link className="btn" href="/case-details">
                            <span className="btn-text">
                              learn more{" "}
                              <i className="fas fa-long-arrow-alt-right"></i>{" "}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </>
              }
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio-button text-center mt-30">
              <Link className="btn" href="/case-1">
                <span className="btn-text">
                  view more <i className="fas fa-long-arrow-alt-right"> </i>{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
