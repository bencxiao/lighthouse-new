import Pagination from "@/utils/Pagination";
import React from "react";
import ShopContent from "./ShopContent";

const ShopSection = () => {
  return (
    <>
      <section className="shop-banner-area pt-120 pb-120">
        <div className="container">
          <div className="row mt-20">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="product-showing mb-40">
                <p>Showing 1–22 of 32 results</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-6">
              <div className="shop-tab f-right">
                <ul className="nav text-center" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      <i className="fas fa-list-ul"></i>{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <i className="fas fa-th-large"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="pro-filter mb-40 f-right">
                <form action="#">
                  <select name="pro-filter" id="pro-filter">
                    <option value="1">Shop By </option>
                    <option value="2">Top Sales </option>
                    <option value="3">New Product </option>
                    <option value="4">A to Z Product </option>
                  </select>
                </form>
                <span>
                  <i className="fas fa-chevron-down"></i>
                </span>
              </div>
            </div>
          </div>

          <ShopContent />
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default ShopSection;
