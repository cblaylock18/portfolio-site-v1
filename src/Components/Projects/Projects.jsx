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
            className={`${styles.projectPage} ${darkMode ? styles.dark : null}`}
        >
            <h2>My Project Page</h2>
            <p>
                Here I show off some of the cool sites and apps that I&apos;ve
                built. Feel free to click around and play with the live demos.
                If you have any questions, reach out to me via{" "}
                <a
                    href="https://www.linkedin.com/in/christopher-w-blaylock/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn{" "}
                    <ExternalLinkSVG darkMode={darkMode}></ExternalLinkSVG>
                </a>{" "}
                or{" "}
                <a
                    href="https://github.com/cblaylock18"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github{" "}
                    <ExternalLinkSVG darkMode={darkMode}></ExternalLinkSVG>
                </a>
                !
            </p>
            <div className={styles.projects}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>
                ))}
            </div>
        </main>
    );
}

export { Projects };
