import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nav.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
function Navbars() {
  return (
    <Navbar expand="lg">
      <Container className="cont">
        <Link to={"/"}>
          <img src={logo} alt="Logo" title="Logo" className="logoNavbar" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="active mt-2">
              Home
            </Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <div href="#action/3.2" className="ps-3">
                <Link to="/about">About Us</Link>
              </div>
              <div href="#action/3.2" className="ps-3">
                <Link to="/ourteam">Our Team</Link>
              </div>
              <div href="#action/3.2" className="ps-3">
                <Link to="/faq">Faq's</Link>
              </div>
              <div href="#action/3.2" className="ps-3">
                <Link to="/booking">Booking</Link>
              </div>
              <div href="#action/3.2" className="ps-3">
                <Link to="/error">Error 404</Link>
              </div>
              <div href="#action/3.2" className="ps-3">
                <Link to="/register">Login / Register</Link>
              </div>
              <NavDropdown.Divider />
            </NavDropdown>
            <Link to="/services" className="mt-2">
              Services
            </Link>
            <Link to="/blog" className="mt-2">
              Blog
            </Link>
            <Link to="/contact" className="mt-2">
              Contact Us
            </Link>
            <Nav.Link>
              <i className="fa-solid fa-magnifying-glass mt-1"></i>
            </Nav.Link>
            <Nav.Link>
              <i className="fa-solid fa-phone phone fs-6"></i>
              (+01) 999 888 777
            </Nav.Link>
            <Link to="/contact" className="mt-1">
              <button>
                Contact Us <span> &gt;</span>
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
