import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const emailAddress = "lakpa.lama4433@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        console.log("Email address copied to clipboard:", emailAddress);
        alert("Email address copied to clipboard!");
        window.open(
          `https://mail.google.com/mail/u/0/#inbox?compose=new`,
          "_blank"
        );
      })
      .catch((error) => {
        console.error("Failed to copy email address:", error);
        // Handle errors or provide feedback to the user
        alert("Failed to copy email address. Please try again.");
      });
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="#" onClick={copyEmailToClipboard}>
            {emailAddress}
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/lakpa-lama-837494212/">
            linkedin.com/lakpalama
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/lakpafutilama">
            github.com/lakpafutilama
          </a>
        </li>
      </ul>
    </footer>
  );
};
