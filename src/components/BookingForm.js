import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Client-side validation to ensure all fields are filled
  const isFormValid = date && time && guests >= 1 && occasion;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    // Dispatch action to update times based on the new date
    dispatch({ type: 'UPDATE_TIMES', payload: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <section className="booking-section">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-field">
            <label htmlFor="book-date">Choose Date</label>
            <input
              id="book-date"
              value={date}
              onChange={handleDateChange}
              type="date"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="book-time">Choose Time</label>
            <select
              id="book-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="" disabled>Select a Time</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="book-guests">Number of Guests</label>
            <input
              id="book-guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="book-occasion">Occasion</label>
            <select
              id="book-occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-submit">
            <input
              aria-label="Submit reservation details"
              type="submit"
              value="Make Your Reservation"
              disabled={!isFormValid}
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default BookingForm;
