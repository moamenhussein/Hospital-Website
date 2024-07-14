import React from "react";
import "./home.css";
import doctorPage from "../Assets/doctor-page.png";
import home1 from "../Assets/home1.png";
import AboutInformation from "./about/AboutInformation";
import LoginHome from "./loginHome/LoginHome";
import Testimonial from "./about/Testimonial";
import NewsInfo from "./about/NewsInfo";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="main">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 ">
                <h5>We Provide All Health Care Solution</h5>
                <h2>Protect Your Health And Take Care To Of Your Health</h2>
                <button>
                  <Link to="/about">Read More</Link>
                </button>
              </div>
              <div className="col-md-6 col-lg-6 ">
                <img src={doctorPage} alt="Doctor Page" />
              </div>
            </div>
          </div>
        </header>
      </div>
      <AboutInformation />
      <LoginHome />
      <div className="testimonialsHome mt-5">
        <Testimonial />
      </div>
      <div className="newsInfo">
        <NewsInfo />
      </div>
    </>
  );
};

export default Home;
