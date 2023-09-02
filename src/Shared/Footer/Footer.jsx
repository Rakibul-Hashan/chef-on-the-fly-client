import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className=" bg-[#2C2C2C] ">
      <footer className="footer container p-10  text-neutral-content">
        <div>
          <span className="text-t32 leading-0">2023 Chef on the Fly, LLC</span>
          <p className="w-1/2">
            We search the nation selecting the very best professional chefs in
            the industry
          </p>
          <div className="icons flex gap-6">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedinIn className="social-icon" />
            <FaRegEnvelope className="social-icon" />
          </div>
        </div>
        <div>
          <Link to={``} className="link link-hover">
            Home
          </Link>
          <Link to={``} className="link link-hover">
            About us
          </Link>
          <Link to={``} className="link link-hover">
            Our services
          </Link>
          <Link to={``} className="link link-hover">
            STAFFING REQUEST
          </Link>
        </div>
        <div>
          <Link to={``} className="link link-hover">
            SUCCESS STORIES
          </Link>
          <Link to={``} className="link link-hover">
            PRIVATE CHEF SERVICES
          </Link>
          <Link to={``} className="link link-hover">
            FAQ
          </Link>
        </div>
        <div>
         <Link to={''}>
          <span className="flex">
            
          </span>
         </Link>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer justify-center bg-[#2C2C2C] px-10 py-4 border-t border-[#424242]  text-neutral-content">
        <p className="font-beb text-t16 text-center">
          ©2023 Chef on The Fly. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
