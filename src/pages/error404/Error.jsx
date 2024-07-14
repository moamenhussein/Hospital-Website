import React from "react";
import Banner from "../../Components/Banner";
import ErrorInfo from "./ErrorInfo";

const Error = () => {
  return (
    <div>
      <div className="contact-container">
        <Banner title="Page Not Found"/>
      </div>
      <div className="error-container">
      <ErrorInfo />
      </div>
    </div>
  );
};

export default Error;
