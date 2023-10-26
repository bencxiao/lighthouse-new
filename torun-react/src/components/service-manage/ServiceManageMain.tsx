import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import ManageMentArea from "./ManageMentArea";
import ItManagment from "./ItManagment";
import AboutService from "../about/AboutService";
import PricingPlan from "./PricingPlan";
import Brand from "../home/Brand";

const ServiceManageMain = () => {
  return (
    <>
      <Breadcrumb pageTitle="IT Management" />
      <ManageMentArea />
      <ItManagment />
      <div className="pt-130 pb-100">
        <AboutService />
      </div>
      <PricingPlan/>
      <Brand/>
    </>
  );
};

export default ServiceManageMain;
