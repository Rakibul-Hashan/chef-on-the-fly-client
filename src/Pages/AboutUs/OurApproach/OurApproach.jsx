import React from "react";
import IMAGES from "../../../assets/images";

const OurApproach = () => {
  return (
    <div className="container lg:-mt-40 grid grid-cols-1  lg:grid-cols-2 items-center  gap-10 bg-primary-30 p-5 lg:p-4 rounded-[20px] overflow-hidden">
      <div className="left-side flex flex-col gap-6 md:pl-8">
        <span className="text-t48 text-primary text-center md:text-left">Our Approach</span>
        {/* icon-text */}
        <div className="icon-text flex gap-4 md:gap-6 items-center">
          <img src={IMAGES.aboutUs.icon1} alt="" />
          <h3 className="text-t32 text-typo-100 w-1/2 md:w-1/3 leading-0 ">
            For Food & Bev Executives
          </h3>
        </div>
        {/* icon-text */}
        <p className="text-base whitespace-pre-line">
          Our extensive review and interview process for each potential new team
          member ensures that you get reliable, skilled, and trustworthy people
          that are truly culinary professionals.
        </p>
      </div>
      {/* right start */}
      <div className="right-side lg:h-[350px] flex flex-col gap-6  bg-white p-5  lg:p-[1.5rem_2.188rem_3.125rem_2.188rem] rounded-[20px]">
        {/* icon-text */}
        <div className="icon-text flex gap-4 md:gap-6 items-center">
          <img src={IMAGES.aboutUs.icon2} alt="" />
          <h3 className="text-t32 text-typo-100 w-1/2 md:w-1/3 leading-0">
          For Culinary Professionals
          </h3>
        </div>
        {/* icon-text */}
        <p className="text-base whitespace-pre-line">
        We’ve been where you are and got tired of hearing about horrible working conditions, horrendous compensation, and no growth opportunity. With the connections and clients we have across the country, we’re able to connect you with the pay rate and opportunities you deserve…And we couldn’t be happier to be able to make that happen!
        </p>
      </div>
    </div>
  );
};

export default OurApproach;
