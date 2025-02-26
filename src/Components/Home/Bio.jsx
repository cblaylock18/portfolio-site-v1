import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeContext } from "../../Context/ThemeProvider";
import headshot from "../../assets/PersonalImages/headshot.jpg";
import styles from "./Bio.module.css";
import { projects } from "../Projects/projects.js";
import { ExternalLinkSVG } from "../../assets/SVGs/ExternalLinkSVG.jsx";

function PersonalInfo() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            className={styles.personalInfo}
            aria-label="Personal Information"
        >
            <img src={headshot} alt="Christopher Blaylock" />
            <p>
                <span>Hi! </span>I&apos;m a React developer that builds
                responsive, user-focused apps. I always enjoy learning and am
                currently focused on Node/Express.
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
                <h2>{project.title}</h2>
            </Link>
            <p>{project.shortDesc}</p>
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
