import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={classes.container}>
      <section className={classes.footer}>
        <section className={classes.logo}>
          <img
            src="/assets/logo-white.png"
            height="100"
            width="60"
            alt="Little Lemons Logo"
          />
        </section>
        <nav className={classes.links}>
          <section className={classes.siteMap}>
            <h1>Site Map</h1>
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
          </section>
          <section className={classes.contact}>
            <h1>Contact Us</h1>
            <ul>
              <li>
                <address>Lemon Street, Chicago, IL 60601,USA</address>
              </li>
              <li>(312) 555-1234</li>
              <li>contact@littlelemon.com</li>
            </ul>
          </section>
          <section className={classes.social}>
            <h1>Connect with Us</h1>
            <ul className={classes.social_list}>
              <li>
                <Link to={"https://www.instagram.com"}>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to={"https://www.facebook.com"}>
                  <FaFacebook />
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </footer>
  );
}
