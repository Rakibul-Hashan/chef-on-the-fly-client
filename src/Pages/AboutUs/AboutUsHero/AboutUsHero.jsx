import React from "react";
import IMAGES from "../../../assets/images";
import ImgText from "../../../components/ImgText/ImgText";

const AboutUsHero = () => {
  return (
    <div>
      <ImgText
        mainExtraClass="lg:!gap-36"
        heading={`We’re searching the nation to provide you the highest standard of culinary professionals and leveling up the career of the chefs that join our team in the process.`}
        eClass="hidden"
        img={IMAGES.aboutUs.hero}
      />
    </div>
  );
};

export default AboutUsHero;
