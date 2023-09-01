import React from "react";
import Hero from "./Hero/Hero";
import StaffProcess from "./StaffProcess/StaffProcess";

const Home = () => {
  return (
    <>
      <div className="bg-primary-10 py-4">
        <Hero />
      </div>
      <StaffProcess />
    </>
  );
};

export default Home;
