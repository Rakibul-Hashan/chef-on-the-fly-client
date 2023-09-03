import React from "react";
import PageTopBanner from "./../../components/PageTopBanner/PageTopBanner";
import Questions from './Questions/Questions';

const FAQ = () => {
  return (
    <div className="">
      <div className="py-7 md:py-10 lg:py-20 bg-primary-10 ">
        <PageTopBanner
          className="w-1/2 px-10"
          headingText="Frequently Asked Questions"
        />
      </div>
      <div className="px-5 py-7 md:py-10 lg:py-20 ">

        <Questions/>
      </div>
    </div>
  );
};

export default FAQ;
