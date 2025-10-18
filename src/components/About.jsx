import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About me</h2>
      <p className={styles.description}>
        Before transitioning into software development, I worked as an
        Anesthetist, a role that honed my analytical thinking, precision, and
        teamwork—skills that now guide my approach to programming. My medical
        background taught me to remain calm under pressure, think critically,
        and pay close attention to details—all invaluable traits when solving
        complex coding problems and building reliable software. I began my
        software development journey at Evangadi Tech, where I was awarded a
        full scholarship to study modern web development. During this program, I
        gained hands-on experience with essential tools and technologies,
        including HTML, CSS, JavaScript, React, Node.js, Express, APIs, and
        MySQL. I contributed to multiple projects, such as rebuilding the Apple
        website, creating Netflix and Amazon clones, developing a Q&A platform,
        and building smaller applications like a calculator. These experiences
        not only strengthened my technical skills but also fueled my passion for
        problem-solving and creating efficient, user-focused applications.
      </p>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>5+</div>
          <div className={styles.statLabel}>Completed Projects</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>95%</div>
          <div className={styles.statLabel}>Client satisfaction</div>
        </div>
      </div>
    </section>
  );
}
