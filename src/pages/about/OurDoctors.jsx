import React from "react";
import OurDoctorsInfo from "./OurDoctorsInfo";
import OurDoctorsInformation from "./OurDoctorsInformation";
import doctorOne from "../../Assets/doctorOne.jpg"
import doctorTwo from "../../Assets/doctorTwo.jpg"
import doctorThree from "../../Assets/doctorThree.jpg"
const OurDoctors = () => {
  return (
    <>
      <OurDoctorsInfo />
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 doctorContainer">
            <OurDoctorsInformation img={doctorOne} headerOne="Dr. Addition Smith" headerTwo="Dentist"/>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 doctorContainer">
            <OurDoctorsInformation img={doctorTwo} headerOne="Dr. Mahfuz Riad" headerTwo="Chiropractor"/>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 doctorContainer">
            <OurDoctorsInformation img={doctorThree} headerOne="Dr. David Benjamin" headerTwo="Cardiologist"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
