import React from 'react';
import IMAGES from '../../../assets/images';
import ImgText from '../../../components/ImgText/ImgText';

const Placement = () => {
    return (
        <div>
        <ImgText
        mainExtraClass = ""
        heading = "Permanent Placement"
        paragraph = {`We provide a chef to fit a staffing need for an agreed upon trial period. If you find them to be a perfect fit for your organization, we help you get them placed in a permanent capacity on your team.\n\nThis service is available for both our contract staffing, and private chef services.
        `}
        btnLink={`/faq`}
        btText = "Book a Consultation"
        eClass = ""
        img = {IMAGES.services.placement}
        order={`-order-1 lg:-order-1`}
        />    
        </div>
    );
};

export default Placement;