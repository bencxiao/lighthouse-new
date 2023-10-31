import Link from "next/link";
import React from "react";

const Courses = () => {
  const courseData = [
    {
      id: 1,
      title: "Web Designer",
      subTitle: "Full Time",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    },
    {
      id: 2,
      title: "Web Developer",
      subTitle: "Part  Time",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    },
    {
      id: 3,
      title: "SEO Optimization",
      subTitle: "Full Time",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    },
    {
      id: 4,
      title: "IT Marketing",
      subTitle: "Part  Time",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    },
    {
      id: 5,
      title: "IT Consultant",
      subTitle: "Full Time",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    },
    {
      id: 6,
      title: "Computer Engineer",
      subTitle: "Part Time",
      details:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    },
  ];

  return (
    <>
      <section className="job-list-area grey-bg-2 pt-120 pb-90">
        <div className="container">
          <div className="row">
            {courseData.map((item) => (
              <div key={item.id} className="col-lg-6 col-md-6">
                <div className="job-list mb-30">
                  <h3> {item.title} </h3>
                  <span>({item.subTitle})</span>
                  <p>{item.details}</p>
                  <Link className="btn" href="/service-1">
                    <span className="btn-text">
                      Read More <i className="fas fa-long-arrow-alt-right"></i>{" "}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
