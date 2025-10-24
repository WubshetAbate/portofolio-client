import React from "react";
import styles from "./Hero.module.css";

export default function Hero({ scrollToSection }) {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello.</p>
        <h1 className={styles.title}>
          I'm Wubshet Abate
          <br />
          <span className={styles.titleHighlight}>
            Fullstack Software Developer
          </span>
        </h1>
        <p className={styles.description}>
          I build responsive, accessible web apps using React and Node.js. I
          enjoy designing clean interfaces and integrating different APIs.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaButtons}>
          <a className={styles.primaryButton}>Got a project?</a>

          {/* Downloadable Resume Button */}
          <a
            href="/CV & documents .docx" // <-- fixed path
            download="CV & documents .docx"
            className={styles.secondaryButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            >
              <path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.67v4h6V9h3.67L12 2z" />
            </svg>
            My Resume
          </a>
        </div>

        {/* Tech Stack */}
        <div className={styles.techStack}>
          <span className={styles.techItem}>HTML5</span>
          <span className={styles.techItem}>CSS</span>
          <span className={styles.techItem}>JavaScript</span>
          <span className={styles.techItem}>React</span>
          <span className={styles.techItem}>Node.js</span>
          <span className={styles.techItem}>API</span>
        </div>
      </div>

      <div className={styles.profileSection}>
        {/* Navigation Links */}
        <nav className={styles.navigation}>
          <a
            href="#home"
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </nav>

        {/* Profile Photo */}
        <div className={styles.profileContainer}>
          <div className={styles.profileRing}></div>
          <img
            src="/Images/WhatsApp Image 2025-10-18 at 17.21.50_bf03f7eaaa.jpg" // <-- fixed path
            alt="profile"
            className={styles.profileImage}
          />
        </div>
      </div>
    </header>
  );
}
