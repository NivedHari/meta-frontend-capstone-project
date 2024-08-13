import React from "react";
import classes from "./Specials.module.css";
import Card from "./Layout/Card";
import { dishes } from "../constants";

export default function Specials() {
  return (
    <section className={classes.container}>
      <section className={classes.heading}>
        <h1>This Weeks specials!</h1>
        <button>Online Menu</button>
      </section>
      <section className={classes.cards}>
        {dishes.map((dish) => (
          <Card
            key={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            img={dish.img}
          />
        ))}
      </section>
    </section>
  );
}
