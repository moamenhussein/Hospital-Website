import React from "react";
import "./register.css";
import logo from "../../Assets/logo.png"
import { Link } from "react-router-dom";
const RegisterInfo = () => {
  return (
    <div className="registerInformation">
      <img src={logo} alt="Log"/>
      <form>
        <input type="text" placeholder="User Name"/><br />
        <input type="password" placeholder="Password"/><br />
        <button><Link to="/home">Login</Link></button><br />
        <span><Link to="/home" className="f-6 fw-bold">Forgot Password</Link></span><br />
        <button className="register"><Link to="/home">Register</Link></button>
      </form>
    </div>
  );
};

export default RegisterInfo;
