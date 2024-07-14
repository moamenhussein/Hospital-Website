import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Navbars from "./Components/nav/Navbars";
import Home from "./pages/Home";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import OurTeam from "./pages/ourTeam/OurTeam";
import Faq from "./pages/Faq's/Faq's";
import Booking from "./pages/booking/Booking";
import Error from "./pages/error404/Error";
import Register from "./pages/register/Register";
import Services from "./pages/services/Services";
import Blogs from "./pages/blogs/Blogs";

const App = () => {
  return (
    <>
    <ScrollToTop smooth top={"50"}/>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
