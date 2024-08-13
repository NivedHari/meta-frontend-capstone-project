import React from "react";
import classes from "./Testimonials.module.css";
import TestimonialsCard from "./Layout/TestimonialsCard";
import { reviews } from "../constants";

export default function Testimonials() {
  return (
    <section className={classes.container}>
      <section className={classes.testimonials}>
        <h1>Testimonials</h1>
        <section className={classes.cards}>
          {reviews.map((review) => (
            <TestimonialsCard
              key={review.id}
              name={review.name}
              rating={review.rating}
              review={review.review}
              img={review.img}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
