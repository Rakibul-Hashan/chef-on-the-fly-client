import React from "react";
import { Link } from "react-router-dom";
import "./ButtonPrimary.module.css";

const ButtonPrimary = ({ link, children, eClass = "" }) => {
  return (
    <Link
      to={link}
      className={`bg-primary px-6 py-2 md:px-12 md:py-3  rounded-lg text-sm md:text-base font-normal text-white ${eClass}`}
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
