import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../Context/ThemeProvider";
import headshot from "../../assets/headshot.jpg";
import styles from "./Bio.module.css";
import { projects } from "./projects";
import { ExternalLinkSVG } from "../../assets/external-link-black.jsx";

function ProjectCard({
    project = {
        id: 1,
        title: "Sample Project",
        image: "./favicon.png",
        shortDesc: "Something went wrong.",
        description: "Something went wrong.",
    },
}) {
    return (
        <div className={styles.projectCard}>
            <h2>{project.title}</h2>
            <img src={project.image} alt={`${project.title} screenshot`} />
            <p>{project.shortDesc}</p>
        </div>
    );
}

function Bio() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`${styles.bio} ${darkMode ? styles.dark : null}`}>
            <div className={styles.personalInfo}>
                <img src={headshot} alt="Christopher Blaylock" />
                <p>
                    I&apos;m a web developer building responsive, user-focused
                    apps with HTML, CSS, JavaScript, and React. Previously a
                    U.S. Navy Nuclear Engineer and Boeing Quality Engineer, I
                    now love creating smooth digital experiences and embracing
                    new challenges.
                </p>
                <a
                    href="https://www.linkedin.com/in/christopher-w-blaylock/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact Me via LinkedIn{" "}
                    <ExternalLinkSVG
                        stroke={darkMode ? "white" : "black"}
                    ></ExternalLinkSVG>
                </a>
            </div>
            <div className={styles.personalProjects}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        // project={project}
                    ></ProjectCard>
                ))}
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        shortDesc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export { Bio };
