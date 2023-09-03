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
  order=`-order-1 lg:order-1`
}) => {
  return (
    <div
      className={`container ${mainExtraClass} grid lg:grid-cols-2 items-center p-5 lg:p-0 gap-16 md:gap-24 lg:pb-12 
  `}
    >
      <div className="left flex flex-col items-start gap-10">
        <h3 className="text-t32 text-typo-100 leading-0">{heading}</h3>
        <p className="text-base whitespace-pre-line">{paragraph}</p>
        <ButtonPrimary className={eClass} link={link}>
          {btText}
        </ButtonPrimary>
      </div>
      <div className={`right ${order}`}>
        <img className="w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default ImgText;
