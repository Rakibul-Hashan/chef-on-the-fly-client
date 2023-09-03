import React from "react";
import IMAGES from "../../../assets/images";
import Partner from "./Partner";

const AboutUsSection = () => {
  const allPartners = [
    {
      img: IMAGES.aboutUs.ceo,
      name: "Chef Pete Silvano",
      designation: "Partner, Founder, & CEO",
      details:
        "The father of the Chef on the Fly vision and owner of Chef’s Life Apparel brand, and the non-profit Hospitality Life Resource Group. As a professional chef with 30+ years of culinary experience, Peter now uses his skills, expertise, and connections within the industry to provide culinary professionals a work environment where they are valued and appreciated, as only a true chef could.",
    },
    {
      img: IMAGES.aboutUs.partner1,
      name: "Andy Varnes",
      designation: "Partner & Chief Marketing Officer",
      details:
        "A photography and social media management professional. Andy's attention to detail, passion for success, mastery of graphic design, and media management expertise have given the Chef on the Fly brand the platform for success it holds today.",
    },
    {
      img: IMAGES.aboutUs.partner2,
      name: "Brody Vinson",
      designation: "Partner & Chief Financial Officer",
      details:
        "Attention to detail and superior professionalism is Brody's style!  With an advanced degree in business finance, and the head for numbers to match, Brody Vinson helps steer the company towards fiscal prosperity.",
    },
    {
      img: IMAGES.aboutUs.partner3,
      name: "Adam Barbereia",
      designation: "Partner & Chief Operating Officer",
      details:
        "A passionate chef for over 20 years, Adam is now committed to the success of the other chefs that are a part of our family. Additionally, Adam oversees and manages all operations for the company and keeps the ship on course towards success.",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-t48 text-primary text-center">
        About us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10">
        {
            allPartners.map((partner, index) => <Partner 
            key={index} 
            partner={partner}
            /> )
        }
      </div>
    </div>
  );
};

export default AboutUsSection;
