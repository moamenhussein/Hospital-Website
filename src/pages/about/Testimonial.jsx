import React from "react";
import "./Testimonial.css";
import testimonial from "../../Assets/testimonials.png";
const Testimonial = () => {
  return (
    <div className="testimonials">
      <div className="info">
        <h3>Testimonial</h3>
        <p>
          See What Are The Patients <br /> Saying About us
        </p>
      </div>
      <div className="imageAndInfo mb-5">
        <div className="container">
          <div className="row">
            <div className="col testimonialImg">
              <img src={testimonial} alt="Testimonials" />
            </div>
            <div className="col prevAndNext">
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-touch="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <p className="carousel-paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed accusamus, nulla quisquam maxime mollitia, voluptate
                      voluptatem possimus vitae earum facere iure, dignissimos
                      iusto reprehenderit asperiores! Culpa tenetur accusantium
                      cupiditate sapiente?
                    </p>
                  </div>
                  <div className="carousel-item">
                    <p className="carousel-paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed accusamus, nulla quisquam maxime mollitia, voluptate
                      voluptatem possimus vitae earum facere iure, dignissimos
                      iusto reprehenderit asperiores! Culpa tenetur accusantium
                      cupiditate sapiente?
                    </p>
                  </div>
                  <div className="carousel-item">
                    <p className="carousel-paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sed accusamus, nulla quisquam maxime mollitia, voluptate
                      voluptatem possimus vitae earum facere iure, dignissimos
                      iusto reprehenderit asperiores! Culpa tenetur accusantium
                      cupiditate sapiente?
                    </p>
                  </div>
                </div>
                <button
                  className="carousel-control-prev btn-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
