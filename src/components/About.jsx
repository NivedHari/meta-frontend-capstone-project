import React from "react";
import classes from "./About.module.css";

export default function About() {
  return (
    <section className={classes.container}>
      <section className={classes.about}>
        <section className={classes.content}>
          <section className={classes.content_header}>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </section>
          <section className={classes.content_para}>
            <p>
              Sed fermentum, eros at maximus cursus, neque libero viverra lacus,
              eget ullamcorper velit odio eu ligula. Mauris consectetur orci
              dui, dictum lobortis elit euismod lobortis. Sed condimentum eget
              sem vitae tincidunt. Proin suscipit odio et sem ornare, quis
              posuere dolor ultricies. Nunc volutpat maximus cursus. Proin vel
              augue luctus, cursus enim eget, fringilla sapien.
            </p>
          </section>
        </section>
        <section className={classes.images}>
          <img className={classes.img_1} src="/assets/Mario and Adrian B.jpg" height="200" width="300" alt="Mario and Adrian"/>
          <img className={classes.img_2} src="/assets/Mario and Adrian A.jpg" height="200" width="300" alt="Mario and Adrian"/>
        </section>
      </section>
    </section>
  );
}
