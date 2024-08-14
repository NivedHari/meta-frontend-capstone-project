import React from "react";
import classes from "./Specials.module.css";
import Card from "./Layout/Card";
import { dishes } from "../constants";
import { useNavigate } from "react-router-dom";

export default function Specials() {
  const navigate = useNavigate()
  return (
    <section className={classes.container}>
      <section className={classes.heading}>
        <h1>This Weeks specials!</h1>
        <button onClick={() => navigate("/menu")}>Online Menu</button>
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
