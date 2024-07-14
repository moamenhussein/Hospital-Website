import React from 'react'
import "./blogs.css";
const BlogsInfo = (props) => {
  return (
    <div>
      <img src={props.img} alt="BlogsOne" className='imgBig'/>
      <div className="doctorContainer">
        <div className="doctor-info">
          <img src={props.imgSmall} alt='' className='imgSmall'/>
          <div className="name">{props.name}</div>
        </div>
        <div className="date">
        <i className="fa-solid fa-calendar-days"></i>
        <div className="date-number">{props.date}</div>
        </div>
      </div>
      <h3 className = "paragraphDoctorInfo">{props.paragraph}</h3>
      <button className='doctorReadmore'>Read More</button>
    </div>
  )
}

export default BlogsInfo
