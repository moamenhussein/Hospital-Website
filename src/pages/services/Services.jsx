import React from "react";
import ServicesInfo from "./ServicesInfo";
import Banner from "../../Components/Banner";
import AboutNumber from "../about/AboutNumber";
import AboutNumbers from "../about/AboutNumbers";
import OurDoctors from "../about/OurDoctors";
import NewsInfo from "../about/NewsInfo";

const Services = () => {
  return (
    <div>
      <div className="contact-container">
        <Banner title="Services" />
      </div>
      <div className="servicesInfo">
        <div className="container">
          <div className="row servicesRow">
            <div className="col-lg-4 col-md-6 col-sm-12 columnServices">
              <ServicesInfo heading="Diagnostics"/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnServices">
              <ServicesInfo heading="Treatment" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnServices">
              <ServicesInfo heading="Surgery" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnServices">
              <ServicesInfo heading="Emergency" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnServices">
              <ServicesInfo heading="Vaccine" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnServices">
              <ServicesInfo heading="Qualified Doctors" />
            </div>
          </div>
        </div>
      </div>
      <AboutNumbers />
      <OurDoctors />
      <NewsInfo />
    </div>
  );
};

export default Services;
