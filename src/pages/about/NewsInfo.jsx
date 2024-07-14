import React from "react";
import image1 from "../../Assets/team1.jpg";
import image2 from "../../Assets/team2.jpg";
import image3 from "../../Assets/team3.jpg";
import img1 from "../../Assets/teamOne.jpeg";
import img2 from "../../Assets/teamTwo.jpeg";
import img3 from "../../Assets/teamThree.jpeg";
import News from "./News";
const NewsInfo = () => {
  return (
    <>
      <div className="newInfo">
        <h6>Latest News</h6>
        <h4>Our Latest News</h4>
      </div>
      <div className="container text-center news-container">
        <div className="row">
          <div className="col">
            <News
              img={image1}
              image={img1}
              name="John Deo"
              date="21 July 2021"
              paragraph="In this hospital there are special surgeon"
            />
          </div>
          <div className="col">
            <News
              img={image2}
              image={img2}
              name="Peter Packer"
              date="22 July 2021"
              paragraph="Can you get a diflucan prescription online?"
            />
          </div>
          <div className="col">
            <News
              img={image3}
              image={img3}
              name="Sonar Moyna"
              date="19 July 2021"
              paragraph="Why Is Skin Surgeon Considered Underrated"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsInfo;
