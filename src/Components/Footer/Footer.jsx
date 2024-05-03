import React from "react";

import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <footer id="footer" className={styles.container}>
      <p>© 2024 Lakpa Futi Lama. All rights reserved.</p>
    </footer>
  );
};
