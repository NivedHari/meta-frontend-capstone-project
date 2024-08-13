import React from "react";
import classes from "./TestimonialsCard.module.css";
import { FaStar } from "react-icons/fa";

export default function TestimonialsCard({ name, img, review, rating }) {
  return (
    <section className={classes.card}>
      <section className={classes.rating}>
        {rating}/5 <FaStar />
      </section>
      <section className={classes.details}>
        <img src={img} height="50" width="60" alt="people" />
        <h3>{name}</h3>
      </section>
      <section className={classes.review}>
        <q>{review}</q>
      </section>
    </section>
  );
}
