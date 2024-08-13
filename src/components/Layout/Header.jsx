import React from "react";
import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <section className={classes.navBar}>
        <section>
          <img src="/assets/Logo.svg" height={50} width={150} alt="Little Lemons Logo" />
        </section>
        <nav>
          <ul className={classes.navList}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
