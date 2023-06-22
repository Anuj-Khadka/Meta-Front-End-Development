import React from "react";
import { useNavigate } from "react-router-dom";

const BookingConfirmed = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="booking-confirmed">
      <h3 className="title confirmed-title">Booking Confirmed!!!</h3>
      <p className="subtitle confirmed-subtitle">
        Please provide your name and contact number at the reception upon
        arrival.
      </p>
      <p className="subtitle confirmed-subtitle">
        We are excited to serve you! ;)
      </p>
      <button className="return-res" onClick={handleReturn}>
        Go To Home
      </button>
    </div>
  );
};

export default BookingConfirmed;
