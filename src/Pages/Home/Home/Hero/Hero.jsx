import React from "react";
// import heroImg from "../../../../assets/images/hero.png";
import IMAGES from "../../../../assets/images/index.js";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary";

const Hero = () => {
  return (
    <div className="container grid lg:grid-cols-2 grid-flow-dense p-5 lg:p-0 gap-16 md:gap-24 lg:pb-12 ">
      <div className="left flex flex-col items-start gap-10">
        <h1 className="text-lrg leading-0">
          Hiring Great chefs doesn&apos;t happen by accident
        </h1>
        <p className="text-base text-">
          With over 1.4 million vacancies in the food service industry, making
          the right hire is the only way to solve your staffing headaches.
          We&apos;ve placed hundreds of chefs in over 50 years in the industry
          and have discovered 10 intangible qualities that successful chefs have
          in common. Be sure to look for these in your next chef hire!
        </p>
        <ButtonPrimary className="" link={"/services"}>
          Download Guide Now
        </ButtonPrimary>
      </div>
      <div className="right -order-1 lg:order-1">
        {/* <img className="w-full" src={require("../../../../assets/images/Logo.png")} alt="" /> */}
        <img className="w-full" src={IMAGES.home.heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
