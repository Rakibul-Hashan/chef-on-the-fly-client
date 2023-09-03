import React from "react";
import IMAGES from "../../../assets/images";
import ImgText from "../../../components/ImgText/ImgText";

const PrivateChef = () => {
  return (
    <div>
      <ImgText
        mainExtraClass=""
        heading="Private Chef"
        paragraph="We provide the highest caliber of chefs that specialize in private catering, private dining, high-end event services, and more. Whether its for a special event, a private party, a sports team, a short or long-term affair, or providing an all-inclusive experience; Chef on the Fly has you covered."
        btnLink={`/faq`}
        btText="Book a Consultation"
        eClass=""
        img={IMAGES.services.privateChef}
        // order={`-order-1 lg:-order-1`}
      />
    </div>
  );
};

export default PrivateChef;
