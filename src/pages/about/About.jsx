import React from "react";
import Banner from "../../Components/Banner";
import "./About.css";
import AboutInformation from "./AboutInformation";
import AboutNumber from "./AboutNumber";
import OurDoctors from "./OurDoctors";
import Testimonial from "./Testimonial";
import NewsInfo from "./NewsInfo";
import AboutNumbers from "./AboutNumbers";

const About = () => {
  return (
    <div>
      <div className="contact-container">
        <Banner title="About Us" />
      </div>
      <AboutInformation />
      <AboutNumbers />
      <OurDoctors />
      <Testimonial />
      <NewsInfo />
    </div>
  );
};

export default About;
