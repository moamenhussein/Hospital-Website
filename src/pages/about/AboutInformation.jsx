import React from "react";
import Image1 from "../../Assets/about1.jpg";
import Image2 from "../../Assets/about2.jpg";
import Image3 from "../../Assets/about3.jpg";
const AboutInformation = () => {
  return (
    <div className="aboutContainer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 container-content">
            <div className="containerOne">
              <img src={Image1} alt="Image1" className="imageOne" />
              <img src={Image2} alt="Image2" className="imageTwo" />
            </div>
            <div className="containerTwo">
              <img src={Image3} alt="Image3" className="imageThree" />
              <div className="head imageFour">
                <h2>20</h2>
                <h3>Year Experience</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 about-cotainerTwo">
            <h4 className="headingOne">About Us</h4>
            <h5 className="headingTwo">
              The Great Place Of Medical Hospital Center
            </h5>
            <p className="paragraph mt-3">
              We provide the special tips and advice’s of heath care treatment
              and high level of best technology involve in the our hospital.
            </p>
            <div className="container text-center mt-5">
              <div className="row">
                <div className="col">
                  <i className="fa-solid fa-truck"></i>
                  <h4>Emergency Help</h4>
                </div>
                <div className="col">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                  <h4>Qualified Doctors</h4>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <i className="fa-solid fa-filter"></i>
                  <h4>Best Professionals</h4>
                </div>
                <div className="col">
                  <i className="fa-solid fa-fire"></i>
                  <h4>Medical Treatment</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInformation;
