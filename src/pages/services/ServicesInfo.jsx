import React from "react";
import "./services.css";
import { Link } from "react-router-dom";
const ServicesInfo = (props) => {
  return (
    <>
      <i className="fa-solid fa-pen-to-square"></i>
      <h2>{props.heading}</h2>
      <p>Phasellus venenatis porta rhoncus. Integer et viverra felis.</p>
      <button><Link>View More</Link></button>
    </>
  );
};

export default ServicesInfo;
