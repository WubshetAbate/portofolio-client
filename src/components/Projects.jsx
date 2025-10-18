import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Projects.module.css";

// Axios instance pointing to backend
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5001",
  // Use new Render backend in production or fallback to local dev
});

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get("/api/projects") // Use full backend route
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={styles.description}>Loading projects...</p>;
  if (error) return <p className={styles.description}>{error}</p>;

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.description}>
        Here are some of my recent projects. Click on the links below to view
        the source code or live demos.
      </p>
      <div className={styles.projectsGrid}>
        {projects.map((p) => (
          <article key={p.id} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{p.title}</h3>
            <p className={styles.projectDescription}>{p.desc}</p>
            <div className={styles.projectTech}>{p.tech.join(" • ")}</div>
            <div className={styles.projectLinks}>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.codeButton}
                >
                  Code
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.demoButton}
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
