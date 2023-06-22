import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  console.log(dispatch);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    date: "",
    time: "00:00",
    noOfGuests: 1,
    occasion: "Birthday",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = async (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    dispatch({ type: "UPDATE_TIMES", payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const options = availableTimes.map((time) => (
    <option key={time}>{time}</option>
  ));

  return (
    <div className="table-booking">
      <h3 className="booking-title">Book a Table</h3>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="book-fname booking-inputs">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="book-lname booking-inputs">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="book-phnum booking-inputs">
          <label htmlFor="contact-number">Contact Number</label>
          <input
            type="text"
            id="contact-number"
            name="contactNumber"
            placeholder="123-456-7890"
            value={formData.contactNumber}
            onChange={handleFormChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>
        <div className="book-date booking-inputs">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={formData.date}
            onChange={handleDateChange}
            required
            min={currentDate}
          />
        </div>
        <div className="book-time booking-inputs">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time "
            name="time"
            value={formData.time}
            onChange={handleFormChange}
            required
          >
            {options}
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
            value={formData.noOfGuests}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className="book-occasion booking-inputs">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            required
            value={formData.occasion}
            onChange={handleFormChange}
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
