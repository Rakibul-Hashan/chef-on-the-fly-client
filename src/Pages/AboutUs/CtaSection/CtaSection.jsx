import React from "react";
import ButtonPrimary from "../../../components/Buttons/ButtonPrimary";

const CtaSection = () => {
  return (
    <div className="container">
      <h1 className="text-t48 text-typo-100 text-center">
        Are you ready for a change?
      </h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-7 justify-between pt-10">
        {/* grid item */}

        <div className="item-1 flex flex-col items-center gap-4 py-24 bg-primary-10 rounded-[20px]">
          <h3 className="text-t32 text-typo-100 leading-0">
            Talk about Staffing
          </h3>
          <p className="text-base w-3/4 text-center">
            If you’re ready to stop putting out staffing fires, let’s talk!
          </p>
          <ButtonPrimary btnLink="/" children="Book a call" eClass="" />
        </div>
        {/* grid item */}
        <div className="item-1 flex flex-col items-center gap-4 py-24 bg-primary-10 rounded-[20px]">
          <h3 className="text-t32 text-typo-100 leading-0">
          Join Our Team
          </h3>
          <p className="text-base w-3/4 text-center">
          If you’re a culinary pro ready to be appreciated for your skills and dedication, let’s chat!
          </p>
          <ButtonPrimary btnLink="/" children="Join our team" eClass="" />
        </div>
        <div className="item-2"></div>
      </div>
    </div>
  );
};

export default CtaSection;
