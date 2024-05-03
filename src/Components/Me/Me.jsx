import React from "react";

import styles from "./Me.module.css";
import { getImageUrl } from "../../utils";

export const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <br />
          Lakpa Futi Lama
        </h1>
        <p className={styles.description}>
          A Software Developer <br />
          Reach out if you'd like to learn more
        </p>
        <a
          href="https://drive.google.com/file/d/13WMaui-i5KnSGXGArtqhBX3fvSQWJ-7q/view?usp=sharing"
          className={styles.contactBtn}
        >
          Resume
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
