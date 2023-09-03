import React from "react";
import IMAGES from "../../../assets/images";

const SingleQuestion = ({ question }) => {
  const { title, body } = question;
  return (
    <div>
      {/* question start */}
      <details className="group rounded-xl bg-primary-10 ">
        <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
          <h3 className="text-t32 leading-0 text-typo-100">{title}</h3>
          <div className="text-secondary-500">
            <img
              src={IMAGES.faq.arrow}
              className="block h-5 text-t32  transition-all duration-300 group-open:-rotate-180"
            />
          </div>
        </summary>
        <div className="px-6 py-11 font-bebBook text-t20 border-t border-primary-20 whitespace-pre-line">
          {body}
        </div>
      </details>
      {/* question start */}
    </div>
  );
};

export default SingleQuestion;
