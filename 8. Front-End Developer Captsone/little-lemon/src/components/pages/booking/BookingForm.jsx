import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [noGuests, setNoGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setNoGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="table-booking">
      <h3 className="booking-title">Book a Table</h3>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="book-date booking-inputs">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="book-time booking-inputs">
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={handleTimeChange}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>
        <div className="book-guests booking-inputs">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={noGuests}
            onChange={handleGuestsChange}
          />
        </div>
        <div className="book-occasion booking-inputs">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

        </div>
        <div className="book-confirm">

          <input type="submit" value="Make Your reservation" />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
