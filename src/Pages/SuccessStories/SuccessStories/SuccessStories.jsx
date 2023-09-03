import React from "react";
import PageTopBanner from "../../../components/PageTopBanner/PageTopBanner";
import CompletedContracts from "../CompletedContracts/CompletedContracts";

const SuccessStories = () => {
  return (
    <div>
      <div className="py-7 md:py-10 lg:py-20 bg-primary-10 ">
        <PageTopBanner
          className="w-1/2 px-10"
          headingText={`Below are some case studies of our successfully completed contracts. Click on each on to learn more`}
        />
      </div>
      <div className="py-7 md:py-10 lg:py-20 bg-neutral-4 ">
        <CompletedContracts />  
      </div>
    </div>
  );
};

export default SuccessStories;
