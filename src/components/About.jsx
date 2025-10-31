import React, { useState, useEffect } from "react";
import styles from "./About.module.css";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind-style breakpoint (sm)
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const text = `
    Before moving into software development, I worked as an anesthetist—an
    experience that strengthened my analytical thinking, precision, and
    teamwork. Those same qualities now shape my approach to coding, helping
    me stay calm under pressure and solve complex problems with attention to
    detail. I began my development journey at Evangadi Tech on a full
    scholarship in modern web development, gaining hands-on experience with
    HTML, CSS, JavaScript, React, Node.js, Express, APIs, and MySQL. I’ve
    built projects such as Apple, Netflix, and Amazon clones, a Q&A
    platform, and smaller apps like a calculator—all of which deepened my
    skills and fueled my passion for creating user-centered solutions.
  `;

  // Short version for mobile
  const shortText = text.slice(0, 250) + "...";

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>

      <p className={styles.description}>
        {isMobile && !isExpanded ? shortText : text}
      </p>

      {isMobile && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.seeMoreBtn}
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>5+</div>
          <div className={styles.statLabel}>Completed Projects</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>95%</div>
          <div className={styles.statLabel}>Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
}
