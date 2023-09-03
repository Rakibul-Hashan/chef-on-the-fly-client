import React from "react";

const PageTopBanner = ({
    headingText="",
}) => {
  return (
    <div className="container">
      <h3 className="text-t32 mx-auto leading-0 text-center w-2/3 whitespace-pre-line">{headingText}</h3>
    </div>
  );
};

export default PageTopBanner;
