import React from "react";
import logoImage from "../../Assets/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="container">
          <div className="row row-container">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <img src={logoImage} alt="LogoImage" className="footerLogo" />
              <p>
                Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
                smod tempor incididunt ut labore et.
              </p>
              <div className="footer-contact">
                <div className="footer-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="footer-info">
                  <h6>Contact Us</h6>
                  <h4>+01024327924</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/booking">Booking</Link>
                </li>
                <li>
                <Link to="/faq">Faq's</Link>
                </li>
                <li>
                <Link to="/blog">Blogs</Link>
                </li>
                <li>
                <Link to="/ourteam">Our Team</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h2>Our Service</h2>
              <ul>
                <li>
                  <a href="/#">Dental Care</a>
                </li>
                <li>
                  <a href="/#">Cardiac Clinic</a>
                </li>
                <li>
                  <a href="/#">Massege Therapy</a>
                </li>
                <li>
                  <a href="/#">Cardiology</a>
                </li>
                <li>
                  <a href="/#">Precise Diagnosis</a>
                </li>
                <li>
                  <a href="/#">Abmbulance Services</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h2>Subcribe</h2>
              <form>
                <input type="email" placeholder="Email Address" />
                <button type="submit">Subscribe Now</button>
              </form>
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
      <div className="footer-btn">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              Copyright &copy; 2024 Design &amp; Developed by
              <span>ENG/Moamen Hussein Bassiony</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
