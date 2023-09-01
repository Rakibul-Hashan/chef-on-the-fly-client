import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
const Navbar = () => {
const homeUrl = useLocation().pathname;
console.log(homeUrl);
  
  return (
    <div className={`py-6 ${homeUrl === '/' ? "bg-primary-10" : "bg-base-10"} `}>
      <div className="navbar container  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home </Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/about-us"}>Learn More</Link>
              </li>
              <li>
                <Link to={"/"}>Build Your Team</Link>
              </li>
            </ul>
          </div>
          <Link>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
{/* ==============  Desktop ====================== */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link  to={"/"} className="text-base">Home </Link>
            </li>
            <li>
              <Link to={"/services"}  className="text-base">Services</Link>
            </li>
            <li>
              <Link to={"/about-us"} className="text-base">Learn More</Link>
            </li>
            <li>
              <Link to={"/"} className="text-base">Build Your Team</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        <ButtonPrimary  link={'/'} >Join our team</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
