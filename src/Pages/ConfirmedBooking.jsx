import React from "react";
import classes from "./ConfirmedBooking.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
  const navigate = useNavigate();
  return (
    <section className={classes.container}>
      <section className={classes.message}>
        <FaCheckCircle className={classes.check} />
        <h1>Your reservation has been confirmed</h1>
        <p>You will receive an email with all the details.</p>
        <button onClick={() => navigate("/")} className={classes.button}>
          Go to Homepage
        </button>
      </section>
    </section>
  );
}
