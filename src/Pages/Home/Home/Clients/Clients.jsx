import React from "react";
import Slider from "react-slick";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../../../node_modules/slick-carousel/slick/slick.css";
import IMAGES from "../../../../assets/images";
import ClientLogo from "./ClientLogo";

const Clients = () => {
  const logoLinks = [
    IMAGES.home.clientlogo1,
    IMAGES.home.clientlogo2,
    IMAGES.home.clientlogo3,
    IMAGES.home.clientlogo6,
    IMAGES.home.clientlogo4,
    IMAGES.home.clientlogo5,
    IMAGES.home.clientlogo6,
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    smoothScroll: true,
    arrows: false,
    pauseonhover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container flex flex-col gap-10">
      <h3 className="text-t32 leading-0 text-center">Satisfied Clients</h3>

      <div className="bg-primary-10 p-8 rounded-[10px]">
        <Slider {...settings}>
          {logoLinks.map((logoLink, index) => {
            return <ClientLogo key={index} imgLink={logoLink} alt={"logo"} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
