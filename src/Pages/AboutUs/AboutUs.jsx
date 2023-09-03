import React from "react";
import IMAGES from "../../assets/images";
import ImgText from "../../components/ImgText/ImgText";
import AboutUsHero from "./AboutUsHero/AboutUsHero";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import OurApproach from "./OurApproach/OurApproach";
import CtaSection from "./CtaSection/CtaSection";

const AboutUs = () => {
  return (
    <div>
      <div className="px-5 py-7 md:py-10 lg:py-20 bg-primary-10 ">
        <AboutUsHero />
      </div>
      <div className="px-5 py-7 md:py-10 lg:py-20 lg:h-[830px]  bg-neutral-4">
        <ImgText
          mainExtraClass="lg:!gap-36"
          heading="Our Vision"
          paragraph={`We’re a team with executive leadership, Pete & Adam, that have over 50 years in the kitchen between them. We’ve experienced the magic (and the mess) of the industry, and our purpose is to elevate it by providing our clients and our culinary team the highest level of quality, attention to detail, responsiveness, and growth opportunities that we possibly can.`}
          btnLink
          btText=""
          eClass
          img={IMAGES.aboutUs.ourvision}
          order={`-order-1 lg:-order-1`}
        />
      </div>
      <div className="px-5 py-3 md:py-0 lg:py-0  ">
        <OurApproach />
      </div>
      <div className="px-5 py-7 md:py-10 lg:py-20 ">
        <AboutUsSection />
      </div>
      <div className="px-5 py-7 md:py-10 lg:py-20 ">
        <CtaSection />
      </div>
    </div>
  );
};

export default AboutUs;
