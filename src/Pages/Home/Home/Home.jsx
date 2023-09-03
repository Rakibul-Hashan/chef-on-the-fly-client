import React from "react";
import Clients from "./Clients/Clients";
import Hero from "./Hero/Hero";
import StaffProcess from "./StaffProcess/StaffProcess";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <div className="bg-primary-10 py-4">
        <Hero />
      </div>
      <div className="py-7 md:py-10 lg:py-20">
        <StaffProcess />
      </div>
      <div className="py-7 md:py-10 lg:py-20">
        <WhoWeAre></WhoWeAre>
      </div>
      <div className="py-7 md:py-10 lg:py-20">
        <Clients />
      </div>
    </>
  );
};

export default Home;
