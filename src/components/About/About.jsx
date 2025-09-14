import React from "react";

import styles from "./About.module.css";

import aboutImage from '../../../assets/about/AboutBoy2.png'
import cursorIcon from '../../../assets/about/cursorIcon.png'
import serverIcon from '../../../assets/about/serverIcon.png'
import phone from '../../../assets/about/phone.png'
import uiIcon from '../../../assets/about/uiIcon.png'



export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive and modern web apps with React
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs with Node.js & MongoDB
              </p>
            </div>
          </li>
           <li className={styles.aboutItem}>
            <img className={styles.phoneImg} src={phone} alt="Phone icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>
                Developing cross-platform apps with Flutter for smooth user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About