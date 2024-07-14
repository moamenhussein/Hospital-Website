import React from "react";
import "./AboutNumber.css"
const AboutNumber = (props) => {
  return (
    <>
      <div className="about-container-number">
        <h4 className="number">{props.headerFour}</h4>
        <h6>{props.headerTite}</h6>
        <p>
          Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.
        </p>
      </div>
    </>
  );
};

export default AboutNumber;
