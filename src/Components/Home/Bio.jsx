import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeContext } from "../../Context/ThemeProvider";
import headshot from "../../assets/PersonalImages/headshot.jpg";
import styles from "./Bio.module.css";
import { projects } from "./projects";
import { ExternalLinkSVG } from "../../assets/SVGs/ExternalLinkSVG.jsx";

function PersonalInfo() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={styles.personalInfo}>
            <img src={headshot} alt="Christopher Blaylock" />
            <p>
                I&apos;m a web developer building responsive, user-focused apps
                with HTML, CSS, JavaScript, and React. Previously a U.S. Navy
                Nuclear Engineer and Boeing Quality Engineer, I now love
                creating smooth digital experiences and embracing new
                challenges.
            </p>
            <a
                href="https://www.linkedin.com/in/christopher-w-blaylock/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Contact Me via LinkedIn{" "}
                <ExternalLinkSVG darkMode={darkMode}></ExternalLinkSVG>
            </a>
        </div>
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
        <div
            className={`${styles.projectCard} ${darkMode ? styles.dark : null}`}
        >
            <Link to="/projects#project-id">
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
            <div className={`${styles.bio} ${darkMode ? styles.dark : null}`}>
                <PersonalInfo />
                <div className={styles.personalProjects}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        ></ProjectCard>
                    ))}
                </div>
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
