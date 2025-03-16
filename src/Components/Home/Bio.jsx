import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeContext } from "../../Context/ThemeProvider";
import headshot from "../../assets/PersonalImages/headshot.jpg";
import styles from "./Bio.module.css";
import { projects } from "../Projects/projects.js";
import { ExternalLinkSVG } from "../../assets/SVGs/ExternalLinkSVG.jsx";
import { Caret } from "../../assets/SVGs/Caret.jsx";

function PersonalInfo() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            className={styles.personalInfo}
            aria-label="Personal Information"
        >
            <img src={headshot} alt="Christopher Blaylock" />
            <p>
                <span>Hi! </span>I&apos;m a full-stack developer that builds
                responsive, user-focused apps. My frontend expertise is in
                React, and I&apos;ve recently expanded my skills in back-end
                with Node.js, Express, and PostgreSQL.
            </p>
            <a
                href="https://www.linkedin.com/in/christopher-w-blaylock/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Christopher Blaylock LinkedIn Profile"
            >
                Contact Me via LinkedIn{" "}
                <ExternalLinkSVG darkMode={darkMode}></ExternalLinkSVG>
            </a>
            <a
                href="https://github.com/cblaylock18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Christopher Blaylock Github Profile"
            >
                Github <ExternalLinkSVG darkMode={darkMode}></ExternalLinkSVG>
            </a>
        </section>
    );
}

function ProjectCard({
    project = {
        id: 1,
        title: "Sample Project",
        liveDemo: "https://github.com/cblaylock18",
        githubRepo: "https://github.com/cblaylock18",
        imageSrc: "./favicon.png",
        shortDesc: "Something went wrong.",
        description: "Something went wrong.",
    },
}) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`${styles.projectCard} ${darkMode ? styles.dark : ""}`}>
            <Link to={`/projects#${project.id}`}>
                <h2>
                    {project.title}
                    <Caret darkMode={darkMode} direction="right" />
                </h2>
            </Link>
            <p>{project.shortDesc}</p>
            <div>
                <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Live Demo{" "}
                    <ExternalLinkSVG darkMode={darkMode}></ExternalLinkSVG>
                </a>
                <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github Repo{" "}
                    <ExternalLinkSVG darkMode={darkMode}></ExternalLinkSVG>
                </a>
            </div>
        </div>
    );
}

function Bio() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <>
            <div className={`${styles.bio} ${darkMode ? styles.dark : ""}`}>
                <PersonalInfo />
                <section
                    className={styles.personalProjects}
                    aria-label="Personal Projects"
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        ></ProjectCard>
                    ))}
                </section>
            </div>
        </>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        liveDemo: PropTypes.string,
        githubRepo: PropTypes.string,
        imageSrc: PropTypes.string.isRequired,
        shortDesc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export { Bio };
