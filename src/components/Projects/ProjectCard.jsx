import React from "react";

import styles from "./ProjectCard.module.css";
import wallet from '../../../assets/projects/wallet.png';
import protrack from '../../../assets/projects/protrack.png';
import turfzy from '../../../assets/projects/turfzy.png';

// Map project titles to images
const imageMap = {
  "Atudent Wallet": wallet,
  "Protarck": protrack,
  "Turfzy": turfzy,
};

export const ProjectCard = ({
  project: { title, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageMap[title] || wallet} // fallback to wallet if not found
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          Demo
        </a> */}
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;