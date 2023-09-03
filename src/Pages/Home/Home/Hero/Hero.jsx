import React from "react";
// import heroImg from "../../../../assets/images/hero.png";
import { Link } from "react-router-dom";
import IMAGES from "../../../../assets/images/index.js";

const Hero = () => {
  return (
    <>
      <div className="container grid lg:grid-cols-2 grid-flow-dense p-5 lg:p-0 gap-16 md:gap-24 lg:pb-12 ">
        <div className="left flex flex-col items-start gap-10">
          <h1 className="text-lrg leading-0">
            Hiring Great chefs doesn&apos;t happen by accident
          </h1>
          <p className="text-base text-">
            With over 1.4 million vacancies in the food service industry, making
            the right hire is the only way to solve your staffing headaches.
            We&apos;ve placed hundreds of chefs in over 50 years in the industry
            and have discovered 10 intangible qualities that successful chefs
            have in common. Be sure to look for these in your next chef hire!
          </p>

          <Link
            onClick={() => window.download_book_modal.showModal()}
            className={`bg-primary px-6 py-2 md:px-12 md:py-3  rounded-lg text-sm md:text-base font-normal text-white `}
          >
            Download Guide Now
          </Link>
        </div>
        <div className="right -order-1 lg:order-1">
          {/* <img className="w-full" src={require("../../../../assets/images/Logo.png")} alt="" /> */}
          <img className="w-full" src={IMAGES.home.heroImg} alt="" />
        </div>
      </div>
      {/* Open the modal using ID.showModal() method */}

      <dialog
        id="download_book_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <form method="dialog" className="modal-box">
          <div className="flex justify-between items-center">
            <Link
            to={`https://www.africau.edu/images/default/sample.pdf`}
              className={`bg-primary px-5 py-2 md:px-5 md:py-3  rounded-lg text-t16 font-normal text-white `}
            >
              Download PDF
            </Link>
            <h3 className="text-t32 leading-0">PDF Preview</h3>
            <button className=" btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.3033 10.3032C10.7533 9.85332 11.3637 9.60056 12.0001 9.60056C12.6365 9.60056 13.2468 9.85332 13.6969 10.3032L24.0001 20.6064L34.3033 10.3032C34.5247 10.074 34.7895 9.89119 35.0823 9.76541C35.3751 9.63962 35.69 9.57342 36.0087 9.57065C36.3274 9.56788 36.6434 9.6286 36.9384 9.74928C37.2333 9.86995 37.5013 10.0482 37.7266 10.2735C37.952 10.4988 38.1302 10.7668 38.2508 11.0618C38.3715 11.3567 38.4322 11.6727 38.4295 11.9914C38.4267 12.3101 38.3605 12.625 38.2347 12.9178C38.1089 13.2106 37.9261 13.4755 37.6969 13.6968L27.3937 24L37.6969 34.3032C38.1341 34.7559 38.376 35.3621 38.3705 35.9914C38.365 36.6207 38.1126 37.2226 37.6676 37.6676C37.2227 38.1126 36.6207 38.365 35.9914 38.3705C35.3622 38.3759 34.7559 38.134 34.3033 37.6968L24.0001 27.3936L13.6969 37.6968C13.2442 38.134 12.638 38.3759 12.0087 38.3705C11.3794 38.365 10.7775 38.1126 10.3325 37.6676C9.88753 37.2226 9.63512 36.6207 9.62966 35.9914C9.62419 35.3621 9.86609 34.7559 10.3033 34.3032L20.6065 24L10.3033 13.6968C9.85334 13.2468 9.60059 12.6364 9.60059 12C9.60059 11.3637 9.85334 10.7533 10.3033 10.3032V10.3032Z"
                  fill="#827189"
                />
              </svg>
            </button>
          </div>
          <img src={IMAGES.home.bookCover} className="pt-4 drop-shadow-[0px_10px_40px_0px_rgba(49,56,55,0.10)]" alt="pdf-book" />
        </form>
      </dialog>
      {/* Open the modal using ID.showModal() method */}
    </>
  );
};

export default Hero;
