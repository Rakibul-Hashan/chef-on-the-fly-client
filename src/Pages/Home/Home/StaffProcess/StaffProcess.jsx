import React from "react";
import IMAGES from "../../../../assets/images/index.js";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary.jsx";
const StaffProcess = () => {
  return (
    <div className="container">
      <h3 className=" text-t32 text-center">
        Solving your staffing shortages can be as easy as 1-2-3!
      </h3>
      {/* 3 column grid  */}
      <div className="grid-container grid grid-cols-1 lg:grid-cols-3  p-5 lg:p-0 gap-6 my-5 lg:my-10">
        {/* grid-----item */}
        <div className="item  bg-primary-10 border-b-[10px] border-primary-20 pt-9  pb-6 px-12">
          <div className="img-box flex flex-col  h-full items-center gap-10 ">
            <img src={IMAGES.home.second1} alt="" />
            <div>
              <span className="img-caption text-t20 text-center">
                Book a meeting{" "}
              </span>
            </div>
          </div>
        </div>
        {/* grid-----item */}
        <div className="item  bg-[#FEF5F0] border-b-[10px] border-[#FFD9C3] pt-9  pb-6 px-12">
          <div className="img-box flex flex-col  h-full  items-center gap-10 ">
            <img src={IMAGES.home.second2} alt="" />
            <span className="img-caption text-t20 text-center">
              Tell us about your <br />
              current staffing needs
            </span>
          </div>
        </div>
        {/* grid-----item */}
        <div className="item  bg-neutral-4 border-b-[10px] border-[#C8D3FF] pt-9  pb-6 px-12">
          <div className="img-box flex flex-col  h-full items-center gap-10 ">
            <img src={IMAGES.home.second3} alt="" />
            <span className="img-caption text-t20 text-center">
              We find the perfect fit <br />
              for your needs
            </span>
          </div>
        </div>
      </div>
      {/* 3 column grid  end*/}
      <div className="cta flex justify-center ">
        <ButtonPrimary link={"/faq"} eClass="mx-auto"> Get Started</ButtonPrimary>
      </div>
    </div>
  );
};

export default StaffProcess;
