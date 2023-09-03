import React from "react";
import IMAGES from "../../../assets/images";
import CompletedContractSingle from "./CompletedContractSingle";

const CompletedContracts = () => {
  const allContracts = [
    {
      img: IMAGES.sucessStories.contract0,
      name: "Northwestern University",
      url: "https://www.northwestern.edu/",
    },
    {
      img: IMAGES.sucessStories.contract1,
      name: "University of Chicago",
      url: "https://www.uchicago.edu/",
    },
    {
      img: IMAGES.sucessStories.contract2,
      name: "University of Nevada Reno",
      url: "https://www.unr.edu/",
    },
    {
      img: IMAGES.sucessStories.contract3,
      name: "McNeese State University",
      url: "https://www.mcneese.edu/",
    },
    {
      img: IMAGES.sucessStories.contract4,
      name: "Oklahoma City University",
      url: "https://www.okcu.edu/",
    },
    {
      img: IMAGES.sucessStories.contract5,
      name: "Fort McCoy Army Installation",
      url: "https://www.mccoy.army.mil/",
    },
    {
      img: IMAGES.sucessStories.contract6,
      name: "Waste Management Phoenix Open",
      url: "https://wmphoenixopen.com/",
    },
    {
      img: IMAGES.sucessStories.contract7,
      name: "Kensington Mines - ESS Alaska",
      url: "https://www.kensingtonmine.com/",
    },
    {
      img: IMAGES.sucessStories.contract8,
      name: "North Slope Oil Field - Alaska",
      url: "https://www.alyeska-pipe.com/",
    },
    {
      img: IMAGES.sucessStories.contract9,
      name: "North Fork Club - Idaho",
      url: "https://www.northforkidaho.com/",
    },
    {
      img: IMAGES.sucessStories.contract10,
      name: "The Club at 3 Creek - Wyoming",
      url: "https://www.threecreekranch.com/",
    },
    {
      img: IMAGES.sucessStories.contract11,
      name: "The University of Idaho",
      url: "https://www.uidaho.edu/",
    },
    {
      img: IMAGES.sucessStories.contract12,
      name: "Idaho State University",
      url: "https://www.isu.edu/",
    },
    {
      img: IMAGES.sucessStories.contract13,
      name: "Paradise Island Resort - Delaware",
      url: "https://www.paradiseislandrehoboth.com/",
    },
    {
      img: IMAGES.sucessStories.contract14,
      name: "Winter Park Mountain Lodge - Colorado",
      url: "https://www.playwinterpark.com/",
    },
    {
      img: IMAGES.sucessStories.contract15,
      name: "The University of Alaska Fairbanks",
      url: "https://www.uaf.edu/",
    },
  ];
  return (
    <div className="container grid grid-cols-2 md:grid-cols-3 gap-6">
      {/* <img src={ IMAGES.sucessStories.contract0} alt="" /> */}
      {allContracts.map((contract, index) => (
        <CompletedContractSingle key={index} contract={contract} />
      ))}
    </div>
  );
};

export default CompletedContracts;
