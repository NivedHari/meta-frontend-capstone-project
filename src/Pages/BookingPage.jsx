import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import classes from "./BookingPage.module.css";
import { fetchAPI, submitAPI } from "../utils/fakeApi";
import { useNavigate } from "react-router-dom";

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};
export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();
  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) {
      navigate("/booking-confirm");
    }
  };
  return (
    <section className={classes.container}>
      <h1>
        <span>Book</span> a Table
      </h1>
      <p>Please fill out the form below to make a reservation.</p>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitData={submitData}
      />
    </section>
  );
}
