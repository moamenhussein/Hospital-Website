import React from "react";
import "./contact.css";

import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";
import ContactParent from "./ContactParent";
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <Banner title="Contact Us" />
        <div className="form">
          <div className="container text-center">
            <div className="container-row">
              <div className="row ">
                <div className="col-lg-6 col-md-4">
                  <form>
                    <input
                      className="form-control"
                      type="text"
                      value="Your Name"
                      aria-label="readOnly input example"
                      readOnly
                    />
                    <input
                      className="form-control"
                      type="text"
                      value="Email"
                      aria-label="readOnly input example"
                      readOnly
                    />
                    <input
                      className="form-control"
                      type="text"
                      value="Phone Number"
                      aria-label="readOnly input example"
                      readOnly
                    />
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option>Select Department</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <textarea
                      title="Please Fill in This Field"
                      className="form-control"
                      type="text"
                      value="Type Message"
                      aria-label="readOnly input example"
                      readOnly
                    ></textarea>
                    <button>Submit</button>
                  </form>
                </div>
                <div className="col text-start text-light contact-cont">
                  <h6 className="heading-contact">
                    Contact Us For Any Informations
                  </h6>
                  <div className="location-content">
                    <div className="location-icon">
                      <i className="fa-solid fa-location-dot"></i>
                      <h6 className="location">Location</h6>
                    </div>
                    <hr />
                    <p className="address">Tanta, Egypt</p>
                  </div>
                  <div className="location-content">
                    <div className="location-icon">
                      <i className="fa-solid fa-phone"></i>
                      <h6 className="location">Phone</h6>
                    </div>
                    <hr />
                    <p className="address">01024327924</p>
                  </div>
                  <div className="location-content">
                    <div className="location-icon">
                      <i className="fa-solid fa-earth-americas"></i>
                      <h6 className="location">Follow Us</h6>
                    </div>
                    <hr />
                    <ul className="social">
                      <li>
                        <a href="https://www.facebook.com/moalfj?mibextid=ZbWKwL">
                          <i className="fa-brands fa-facebook facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/moamenhussein">
                          <i className="fa-brands fa-github github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/moamen-hussein-414ab1254/">
                          <i className="fa-brands fa-linkedin-in linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com/moamenhussein1?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                          <i className="fa-brands fa-instagram insta"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/qr/O7BJLZVEUXVYK1">
                          <i className="fa-brands fa-whatsapp whats"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactParent />
    </>
  );
};

export default Contact;
