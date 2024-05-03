import React from "react";

import styles from "./Me.module.css";
import { getImageUrl } from "../../utils";

export const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lakpa Lama</h1>
        <p className={styles.description}>
          Software Developer <br />
          Reach out if you'd like to learn more
        </p>
        <a
          href="https://www.linkedin.com/in/lakpa-lama-837494212/"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("me/meImage.png")}
        alt="Me image of me"
        className={styles.meImg}
      />
    </section>
  );
};
