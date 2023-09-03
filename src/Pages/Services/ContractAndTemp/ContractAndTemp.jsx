import React from "react";
import IMAGES from "../../../assets/images";
import ImgText from "../../../components/ImgText/ImgText";

const ContractAndTemp = () => {
    
  return (
    <div>
      <ImgText
        mainExtraClass=""
        heading="Contract & Temporary Staffing"
        paragraph={`We find quality culinary talent for all types of events and needs; short and long-term. From one employee five (or 100 or more), we have you covered and can also provide complete back office administrative support if needed.\n\n  Our team is able to cover all necessary logistics including: flights, accomodations, scheduling, time keeping, payroll, expenses, etc. and each project is customized to suit your individual needs.`}
        btnLink="/faq"
        btText="Book a Consultation"
        eClass=""
        img={IMAGES.services.contract}
      />
    </div>
  );
};

export default ContractAndTemp;
