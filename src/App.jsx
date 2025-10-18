import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import styles from "./App.module.css";

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen) {
        const mobileMenuContainer = document.querySelector(
          ".mobile-menu-container"
        );
        const mobileMenu = mobileMenuContainer?.querySelector(
          '[class*="mobileMenu"]'
        );

        if (
          mobileMenuContainer &&
          !mobileMenuContainer.contains(event.target)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (isMobileMenuOpen) {
      // Use a slight delay to ensure the menu is fully rendered
      const timeoutId = setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 50);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <div className={styles.app}>
      <ThemeToggle />
      <div className={styles.container}>
        <div id="home" className={styles.homeSection}>
          <Hero scrollToSection={scrollToSection} />
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNavigation} mobile-menu-container`}>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={styles.mobileMenuIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <div className={styles.mobileMenuContent}>
                <a
                  href="#home"
                  className={styles.mobileMenuLink}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection("home");
                  }}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className={styles.mobileMenuLink}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className={styles.mobileMenuLink}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection("projects");
                  }}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className={styles.mobileMenuLink}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
        <main className={styles.main}>
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
