import React from "react";
import "./contactCard.css"
const ContactCard = (props) => {
  return (
    <>
      <div className="contactCard">
        <div className="container">
          <div className="card">
            <img src={props.img} alt=""/>
            <h2 className="header">{props.header}</h2>
            <h6 className="info">{props.info}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
