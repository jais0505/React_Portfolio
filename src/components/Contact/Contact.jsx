import React from "react";

import styles from "./Contact.module.css";

import emailIcon from '../../../assets/contact/emailIcon.png'
import linkedIcon from '../../../assets/contact/linkedinIcon.png'
import githubIcon from '../../../assets/contact/githubIcon.png'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:jaisjose3214@gmail.com">jaisjose3214@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jais-jose-60788a250">linkedin.com/jais-jose</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/jais0505">github.com/jais0505</a>
        </li>
      </ul>
    </footer>
  );
};