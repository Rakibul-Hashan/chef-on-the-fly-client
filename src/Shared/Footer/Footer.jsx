import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className=" bg-[#2C2C2C] ">
      <footer className="footer px-5 md:px-0 grid-cols-1 md:grid-cols-2 md:grid-rows-2	 lg:grid-cols-[2fr_1fr_1fr_2fr] lg:grid-rows-1 container py-20  text-neutral-content">
        <div>
          <span className="text-t32 leading-0">2023 Chef on the Fly, LLC</span>
          <p className="">
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
        <div className="flex flex-col gap-3">
          <Link to={``} className="link link-hover">
            Home
          </Link>
          <Link to={`/about-us`} className="link link-hover">
            About us
          </Link>
          <Link to={``} className="link link-hover">
            Our services
          </Link>
          <Link to={``} className="link link-hover">
            STAFFING REQUEST
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/success-stories`} className="link link-hover">
            SUCCESS STORIES
          </Link>
          <Link to={``} className="link link-hover">
            PRIVATE CHEF SERVICES
          </Link>
          <Link to={`/faq`} className="link link-hover">
            FAQ
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {/* mail */}
          <Link to={"mailto: SUPPORT@CHEFONTHEFLY.COM"}>
            <span className="flex gap-2">
              <PiEnvelopeSimpleLight className="text-t20" />
              <span className="text-t20 font-bebBook">
                SUPPORT@CHEFONTHEFLY.COM
              </span>
            </span>
          </Link>
          {/* address */}
          <Link to={""}>
            <span className="flex gap-2">
              <HiLocationMarker className="text-t20" />
              <span className="text-t20 font-bebBook">
                100 W LUCERNE CIR - SUITE 100-X - ORLANDO, FL 32801
              </span>
            </span>
          </Link>
          {/* phone */}
          <Link to={"tel:4077052536"}>
            <span className="flex gap-2">
              <FiPhoneCall className="text-t20" />
              <span className="text-t20 font-bebBook">407.705.2536</span>
            </span>
          </Link>
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
