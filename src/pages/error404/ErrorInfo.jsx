import React from "react";
import "./error.css";
import errorImage from "../../Assets/error.gif";
import { Link } from "react-router-dom";
const ErrorInfo = () => {
  return (
    <div className="error-info">
      <div className="error-img">
        <span className="me-2">4</span>
        <img src={errorImage} alt="Error" />
        <span className="ms-2">4</span>
      </div>
      <h3 className="error-header">
        The Page you were looking for,<br /> couldn't be found.
      </h3>
      <p className="error-paragraph">
        The page you are looking for might have been removed, had its name <br />
        changed, or is temporarily unavailable.
      </p>
      <div className="error-buttons">
        <Link to="/home"><span>Back</span></Link>
        <Link to="/home"><span>Back To Home</span></Link>
      </div>
    </div>
  );
};

export default ErrorInfo;
