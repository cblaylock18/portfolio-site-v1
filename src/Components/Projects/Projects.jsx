import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import { projects } from "./projects";
import { ExternalLinkSVG } from "../../assets/SVGs/ExternalLinkSVG";

function Projects() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <main
            className={`${styles.projectPage} ${darkMode ? styles.dark : ""}`}
        >
            <h2>My Project Portfolio</h2>
            <p>
                Here are some of the cool apps I&apos;ve built. Feel free to
                click around and play with the live demos.{" "}
            </p>
            <section aria-label="Projects" className={styles.projects}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>
                ))}
            </section>
            <p className={styles.callToAction}>
                Any questions about my projects? Reach out via{" "}
                <a
                    href="https://www.linkedin.com/in/christopher-w-blaylock/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Christopher Blaylock LinkedIn Profile"
                >
                    LinkedIn{" "}
                    <ExternalLinkSVG darkMode={darkMode}></ExternalLinkSVG>
                </a>{" "}
                or{" "}
                <a
                    href="https://github.com/cblaylock18"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Christopher Blaylock Github Profile"
                >
                    Github{" "}
                    <ExternalLinkSVG darkMode={darkMode}></ExternalLinkSVG>
                </a>
                !
            </p>
        </main>
    );
}

export { Projects };
