import React from "react";
import ContractAndTemp from "./ContractAndTemp/ContractAndTemp";
import Placement from "./Placement/Placement";
import ServicesBanner from "./ServicesBanner/ServicesBanner";
import PrivateChef from "./PrivateChef/PrivateChef";

const Services = () => {
  return (
    <div>
      <div className="py-7 md:py-10 lg:py-20 bg-primary-10 ">
        <ServicesBanner />
      </div>
      <div className="py-7 md:py-10 lg:py-20 ">
        <ContractAndTemp />
      </div>
      <div className="py-7 md:py-10 lg:py-20 bg-neutral-4">
        <Placement />
      </div>
      <div className="py-7 md:py-10 lg:py-20">
        <PrivateChef />
      </div>
    </div>
  );
};

export default Services;
