import React from "react";
import img1 from '../../../../assets/images/book-meeting.png';
const StaffProcess = () => {
  return (
    <div>
      <h3 className=" text-t32 text-center">
        Solving your staffing shortages can be as easy as 1-2-3!
      </h3>
      <div className="grid-container grid grid-cols-3">
        <div className="item">
          <div className="img-box">
            <img src={img1} alt="" />
            <span className="img-caption">Book a meeting</span>
          </div>
        </div>
        <div className="item">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          sapiente error assumenda illum! Iusto eveniet earum architecto
          necessitatibus odit aliquam delectus similique assumenda reiciendis,
          voluptatum nihil, aperiam molestiae harum in.
        </div>
        <div className="item">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          sapiente error assumenda illum! Iusto eveniet earum architecto
          necessitatibus odit aliquam delectus similique assumenda reiciendis,
          voluptatum nihil, aperiam molestiae harum in.
        </div>
      </div>
    </div>
  );
};

export default StaffProcess;
