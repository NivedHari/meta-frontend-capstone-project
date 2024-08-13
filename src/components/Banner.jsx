import React from "react";
import classes from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={classes.container}>
      <section className={classes.banner}>
        <section className={classes.bannerContent}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We area a family owned Mediterranean restaurant, focused on a
            traditional recipies served with a modern twist
          </p>
          <button>Reserve a Table</button>
        </section>
        <img src="/assets/restauranfood.jpg" height="150" width="270" alt="restaurant"/>
      </section>
    </section>
  );
}
