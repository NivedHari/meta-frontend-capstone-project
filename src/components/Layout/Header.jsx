import React from "react";
import classes from './Header.module.css';
import { Link } from "react-router-dom";

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
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link to={"/reservations"}>Reservations</Link>
            </li>
            <li>
              <Link to={"/order"}>Order Online</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
