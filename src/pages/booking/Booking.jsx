import React from "react";
import Banner from "../../Components/Banner";
import BookingInfo from "./BookingInfo";

const Booking = () => {
  return (
    <div className="booking-cont mt-2 p-0">
      <div className="contact-container">
        <Banner title="Booking" />
      </div>
      <div className="bookinInfo">
        <BookingInfo />
      </div>
    </div>
  );
};

export default Booking;
