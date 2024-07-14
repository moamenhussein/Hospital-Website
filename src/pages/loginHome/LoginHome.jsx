import React from "react";
import RegisterInfo from "../register/RegisterInfo";
import formLoginHome from "../../Assets/formLoginHome.png"
import "./loginHome.css";
const LoginHome = () => {
  return (
    <div className="loginHome">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <RegisterInfo />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 formHomeImage">
            <img src={formLoginHome} alt="FormLoginHome"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHome;
