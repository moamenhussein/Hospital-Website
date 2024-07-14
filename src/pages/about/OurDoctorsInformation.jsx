import React from 'react'
import "./ourDoctorsInfo.css";
import Image from "../../Assets/doctorOne.jpg"
const OurDoctorsInformation = (props) => {
  return (
    <div className='doctorInfo'>
      <img src={props.img} alt=''/>
      <h3>{props.headerOne}</h3>
      <h6>{props.headerTwo}</h6>
      <ul>
        <li><a href='/'><i className="fa-brands fa-twitter"></i></a></li>
        <li><a href='/'><i className="fa-brands fa-linkedin"></i></a></li>
        <li><a href='/'><i className="fa-brands fa-instagram"></i></a></li>
      </ul>
    </div>
  )
}

export default OurDoctorsInformation
