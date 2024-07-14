import React from "react";
import OurTeamInfo from "./OurTeamInfo";
import Banner from "../../Components/Banner";
import OurDoctors from '../about/OurDoctors'

const OurTeam = () => {
  return (
    <div>
      <div className="contact-container">
        <Banner title="Our Team" />
      </div>
      <OurDoctors />
      <OurTeamInfo />
    </div>
  );
};

export default OurTeam;
