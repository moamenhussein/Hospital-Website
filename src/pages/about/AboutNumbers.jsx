import React from 'react'
import AboutNumber from './AboutNumber'

const AboutNumbers = () => {
  return (
    <div className="aboutNumberContainer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 columnAbounNumber">
          <AboutNumber headerFour="120" headerTite="Years With You" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 columnAbounNumber">
          <AboutNumber headerFour="400" headerTite="Awards" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 columnAbounNumber">
          <AboutNumber headerFour="250" headerTite="Doctors" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 columnAbounNumber">
          <AboutNumber headerFour="800" headerTite="Satisfied Client" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutNumbers
