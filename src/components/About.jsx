import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About me</h2>
      <p className={styles.description}>
        Before transitioning into software development, I worked as an
        anesthetist, a role that sharpened my analytical thinking, precision,
        and teamwork—skills I now apply to programming. My medical background
        taught me to stay calm under pressure, think critically, and focus on
        details, all essential for solving complex coding problems. I began my
        development journey at Evangadi Tech with a full scholarship in modern
        web development, gaining hands-on experience with HTML, CSS, JavaScript,
        React, Node.js, Express, APIs, and MySQL. I contributed to projects like
        rebuilding the Apple website, creating Netflix and Amazon clones,
        developing a Q&A platform, and building smaller apps like a calculator.
        These experiences strengthened my technical skills and fueled my passion
        for problem-solving and building user-focused applications.
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
