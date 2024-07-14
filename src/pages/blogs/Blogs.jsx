import React from "react";
import "./blogs.css";
import Banner from "../../Components/Banner";
import imageOne from "../../Assets/blogOne.jpg";
import imageTwo from "../../Assets/blogTwo.jpg";
import imageThree from "../../Assets/blogThree.jpg";
import imageFour from "../../Assets/blogFour.jpg";
import imageFive from "../../Assets/blogFive.jpg";
import imageSix from "../../Assets/blogSix.jpg";
import blogSiven from "../../Assets/blogSiven.jpg";
import blogEight from "../../Assets/blogEight.jpg";
import blogNine from "../../Assets/blogNine.jpg";
import blogsImageOne from "../../Assets/teamOne.jpeg";
import blogsImageTwo from "../../Assets/doctorTwo.jpg";
import blogsImageThree from "../../Assets/doctor6.jpg";
import blogsImageFour from "../../Assets/doctorOne.jpg";
import blogsImageFive from "../../Assets/doctorThree.jpg";
import blogsImageSix from "../../Assets/blogImageSix.jpeg";
// import blogsImageSix from "../../Assets/blogSix";
import BlogsInfo from "./BlogsInfo";
const Blogs = () => {
  return (
    <div>
      <div className="contact-container">
        <Banner title="Blog Grid 3" />
      </div>
      <div className="blogsContainer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 columnContainerBlogs">
              <BlogsInfo
                img={imageOne}
                imgSmall={blogsImageOne}
                name="John Deo"
                date="21 July 2021"
                paragraph="Dental Care for Women is very important"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnContainerBlogs">
              <BlogsInfo
                img={imageTwo}
                imgSmall={blogsImageTwo}
                name="Peter Packer"
                date="20 July 2021"
                paragraph="In this hospital there are special surgeon"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnContainerBlogs">
              <BlogsInfo
                img={imageThree}
                imgSmall={blogsImageThree}
                name="Sonar Moyna"
                date="19 July 2021"
                paragraph="Why Is Skin Surgeon Considered Underrated"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnContainerBlogs">
              <BlogsInfo
                img={imageFour}
                imgSmall={blogsImageFour}
                name="Kalina"
                date="18 July 2021"
                paragraph="Understand Health Before You Regret"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnContainerBlogs">
              <BlogsInfo
                img={imageFive}
                imgSmall={blogsImageFive}
                name="Michel"
                date="17 July 2021"
                paragraph="Health Will Be A Thing Of The Past And Here"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnContainerBlogs">
              <BlogsInfo
                img={imageSix}
                imgSmall={blogsImageSix}
                name="Peter Packer"
                date="16 July 2021"
                paragraph="Can you get a diflucan prescription online?"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnContainerBlogs">
              <BlogsInfo
                img={blogSiven}
                imgSmall={blogsImageOne}
                name="Sonar Moyna"
                date="15 July 2021"
                paragraph="Ten Gigantic Influences Of Health"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnContainerBlogs">
              <BlogsInfo
                img={blogEight}
                imgSmall={blogsImageTwo}
                name="Kalina"
                date="14 July 2021"
                paragraph="Why Is Skin Surgeon Considered Underrated"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 columnContainerBlogs">
              <BlogsInfo
                img={blogNine}
                imgSmall={blogsImageThree}
                name="Kalina"
                date="14 July 2021"
                paragraph="Why Is Skin Surgeon Considered Underrated"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
