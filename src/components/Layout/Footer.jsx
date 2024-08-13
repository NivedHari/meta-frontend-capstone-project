import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.container}>
      <section className={classes.footer}>
        <section className={classes.logo}>
          <img src="/assets/logo-white.png" height="100" width="60" alt="Little Lemons Logo" />
        </section>
        <nav className={classes.links}>
          <section className={classes.siteMap}>
            <h1>Site Map</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </section>
          <section className={classes.contact}>
            <h1>Contact Us</h1>
            <ul>
              <li><address>Lemon Street, Chicago, IL 60601,USA</address></li>
              <li>(312) 555-1234</li>
              <li>contact@littlelemon.com</li>
            </ul>
          </section>
          <section className={classes.social}>
            <h1>Connect with Us</h1>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </section>
        </nav>
      </section>
    </footer>
  );
}
