import React from "react";
import IMAGES from "../../../../assets/images";
import ImgText from "../../../../components/ImgText/ImgText";

const WhoWeAre = () => {
  return (
    <div>
      <ImgText
        mainExtraClass={""}
        heading="Who We Are"
        paragraph={`Hospitality and food service job shortages are crippling and it's breaking our hearts! Having spent decades in the kitchen serving others, we decided that we couldn't passively allow the industry and community we love so deeply to struggle without doing something about it. So, we started connecting our community of top-tier chefs and kitchen staff to owners and managers with staffing shortages. 

        Our mission is to elevate the industry, eliminate your headaches, and revitalize the community that's cared for us over the years.
        
        If you could use some help, all you have to do is click the link!`}
        link={`/faq`}
        btText="Get Started"
        eClass=""
        img={IMAGES.home.whoweare}
      ></ImgText>
    </div>
  );
};

export default WhoWeAre;
