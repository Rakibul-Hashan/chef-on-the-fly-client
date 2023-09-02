import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";

const ImgText = ({
  mainExtraClass = "",
  heading = "",
  paragraph = "",
  link,
  btText = "",
  eClass = "",
  img = "",
}) => {
  return (
    <div
      className={`container ${mainExtraClass} grid lg:grid-cols-2 grid-flow-dense p-5 lg:p-0 gap-16 md:gap-24 lg:pb-12 
  `}
    >
      <div className="left flex flex-col items-start gap-10">
        <h3 className="text-t32 leading-0">{heading}</h3>
        <p className="text-base text-">{paragraph}</p>
        <ButtonPrimary className={eClass} link={link}>
          {btText}
        </ButtonPrimary>
      </div>
      <div className="right -order-1 lg:order-1">
        <img className="w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default ImgText;
