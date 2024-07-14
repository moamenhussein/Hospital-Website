import React from "react";
import "./booking.css";
const BookingInfo = () => {
  return (
    <div className="booking-container">
      <h3 className="book-header">Book Appointment</h3>
      <form className="connect-form">
        <select className="form-select p-4" aria-label="Default select example">
          <option>Select Department</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select className="form-select mt-3 p-4  p-45" aria-label="Default select example">
          <option>Select Doctor</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control mt-3"
            placeholder="User Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            aria-label="Phone Number"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Phone Number"
            aria-label="Phone Number"
            aria-describedby="basic-addon1"
          />
        </div>
      </form>
    </div>
  );
};

export default BookingInfo;
