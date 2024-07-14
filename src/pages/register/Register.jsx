import React from "react";
import Banner from "../../Components/Banner";
import RegisterInfo from "./RegisterInfo";

const Register = () => {
  return (
    <>
      <div className="contact-container">
        <Banner title="Login & Register" />
        <RegisterInfo />
      </div>
    </>
  );
};

export default Register;
