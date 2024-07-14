import React from "react";
import OurDoctorsInformation from "../about/OurDoctorsInformation";
import doctorOne from "../../Assets/doctor4.jpg";
import doctorTwo from "../../Assets/doctor5.jpg";
import doctorThree from "../../Assets/doctor6.jpg";
const OurTeamInfo = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 doctorContainer">
            <OurDoctorsInformation
              img={doctorOne}
              headerOne="Dr. Addition Smith"
              headerTwo="Dentist"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 doctorContainer">
            <OurDoctorsInformation
              img={doctorTwo}
              headerOne="Dr. Mahfuz Riad"
              headerTwo="Chiropractor"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 doctorContainer">
            <OurDoctorsInformation
              img={doctorThree}
              headerOne="Dr. David Benjamin"
              headerTwo="Cardiologist"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamInfo;
