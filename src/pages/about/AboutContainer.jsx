import React from 'react'
import { Link } from 'react-router-dom'

const AboutContainer = (props) => {
  return (
    <>
      <h2 className="contact">{props.title}</h2>
      <div className="btn-container">
        <Link to={"/"} className="button">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </Link>
        <pre> / {props.title}</pre>
      </div>
    </>
  )
}

export default AboutContainer
