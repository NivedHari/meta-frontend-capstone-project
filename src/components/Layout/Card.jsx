import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({ name, description, price, img }) {
  const navigate = useNavigate();
  return (
    <section className={classes.card}>
      <img src={img} height="150" width="150" alt="card-image" />
      <section className={classes.card_content}>
        <section className={classes.card_header}>
          <h3>{name}</h3>
          <h3 className={classes.price}>${price}</h3>
        </section>
        <p className={classes.description}>{description}</p>
        <section className={classes.order} onClick={() => navigate("/order")}>
          <button>Order a delivery</button>
          <MdDeliveryDining />
        </section>
      </section>
    </section>
  );
}
