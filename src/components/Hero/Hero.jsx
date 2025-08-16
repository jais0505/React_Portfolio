import React from 'react'

import styles from './Hero.module.css';

import heroImage from '../../../assets/hero/heroImage.png';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ada</h1>
                <p className={styles.description}>I'm a full-stack web and mobile developer with 5 years of experience of using React and NodeJS. Reach ou if you'd like to learn  more!</p>
                <a href="mailto:jaisjose5050@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={heroImage} alt="HeroImage" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}

export default Hero