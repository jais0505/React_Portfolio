import React from 'react'

import styles from './Hero.module.css';

import heroImage from '../../../assets/hero/PortifolioImage.jpg';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Jais Jose</h1>
                <p className={styles.description}>Full-stack web & mobile developer skilled in React, Node.js, and Flutter — crafting clean, scalable, and impactful digital solutions.</p>
                <a href="mailto:jaisjose5050@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={heroImage} alt="HeroImage" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}

export default Hero