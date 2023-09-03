import React from "react";

const Partner = ({ partner }) => {
  const { img, name, designation, details } = partner;
  return (
    <div
      className="flex flex-col justify-center items-center gap-12 bg-neutral-4 rounded-[30px] p-8 pb-12
    "
    >
      <img src={img} alt={name} />
      <div className="flex flex-col items-center">
        <h3 className="text-t32 text-typo-100 leading-0">{name}</h3>
        <span className="text-t20 font-man">{designation}</span>
        <p className="text-center pt-4">{details}</p>
      </div>
    </div>
  );
};

export default Partner;
