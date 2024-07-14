import React from "react";
import "./news.css";
const News = (props) => {
  return (
    <div className="team-container">
      <div className="team">
        <img src={props.img} alt="" className="imageBig"/>
        <div className="imgAndNameContainer">
          <div className="imgAndName">
            <img src={props.image} alt="" className="imageSmall"/>
            <h6 className="name">{props.name}</h6>
          </div>
          <div className="date">
            <i className="fa-solid fa-calendar-days"></i>
            <h6 className="date-info">{props.date}</h6>
          </div>
        </div>
        <p className="parag">{props.paragraph}</p>
      </div>
    </div>
  );
};

export default News;
