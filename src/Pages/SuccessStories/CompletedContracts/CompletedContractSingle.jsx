import React from "react";
import { Link } from "react-router-dom";

const CompletedContractSingle = ({ contract }) => {
    const {img, name,url} = contract
  return (
    <Link to={url} target="_blank" className="border-[4px] border-white hover:border-primary transition-all rounded-[20px] overflow-hidden  ">
      <div className="image-box relative ">
        <img
          src={img}
          alt=""
          className="w-full h-[384px]  object-cover object-center"
        />
        <div className="custom-card-body bg-primary-30 min-h-[70px] absolute bottom-0 left-0 w-full flex justify-center items-center">
          <h3 className="text-t24 leading-0 ">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CompletedContractSingle;
