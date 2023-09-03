import React from "react";
import SingleQuestion from "./SingleQuestion";
const Questions = () => {
  const allQuestions = [
    {
      title: "What is Chef on the Fly?",
      body: "Question",
    },
    {
      title: "Why are you a good fit for our company?",
      body: "OUR NUMBER ONE GOAL WITHIN THIS INDUSTRY IS TO PROVIDE A SERVICE FOR EVERY CLIENT, IN ANY SITUATION. WE PERSONALLY HAND PICK THESE CONTRACTORS INDIVIDUALLY FOR EACH CLIENT AND WE TAKE PRIDE IN PROVIDING THE MOST QUALITY SERVICE POSSIBLE.",
    },
    {
      title: "How would you provide services to our operations?",
      body: "OUR NUMBER ONE GOAL WITHIN THIS INDUSTRY IS TO PROVIDE A SERVICE FOR EVERY CLIENT, IN ANY SITUATION. WE PERSONALLY HAND PICK THESE CONTRACTORS INDIVIDUALLY FOR EACH CLIENT AND WE TAKE PRIDE IN PROVIDING THE MOST QUALITY SERVICE POSSIBLE.",
    },
    {
      title: "What areas of the country do you service?",
      body: "OUR NUMBER ONE GOAL WITHIN THIS INDUSTRY IS TO PROVIDE A SERVICE FOR EVERY CLIENT, IN ANY SITUATION. WE PERSONALLY HAND PICK THESE CONTRACTORS INDIVIDUALLY FOR EACH CLIENT AND WE TAKE PRIDE IN PROVIDING THE MOST QUALITY SERVICE POSSIBLE.",
    },
  ];
  return (
    <div className="container">
      <div className="">
        <div className="space-y-6">
          {allQuestions.map((question, index) => {
            return <SingleQuestion key={index} question={question} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
