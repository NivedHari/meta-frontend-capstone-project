import React, { useState } from "react";
import classes from "./BookingForm.module.css";

export default function BookingForm({ availableTimes, dispatch, submitData }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [error, setError] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "dateChanged", payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    if (!date || !time || !guests || !occasion) {
      if (!date) {
        setError("Please select a Date");
      }
      return;
    }
    console.log("Success");
    submitData({ date, time, guests, occasion });
  };

  return (
    <section className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <div>{error && <p className={classes.error}>{error}</p>}</div>
        <button type="submit">Make Your reservation</button>
      </form>
    </section>
  );
}
