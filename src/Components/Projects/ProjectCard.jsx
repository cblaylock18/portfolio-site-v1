import styles from "./ProjectCard.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import { ExternalLinkSVG } from "../../assets/SVGs/ExternalLinkSVG";
import PropTypes from "prop-types";

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
            className={`${styles.projectCard} ${darkMode ? styles.dark : ""}`}
            id={`${project.id}`}
        >
            <div className={styles.imageContainer}>
                <img
                    src={project.imageSrc}
                    alt={`Screenshot of ${project.title}'s live demo`}
                />
            </div>
            <div className={styles.infoContainer}>
                <h3>{project.title}</h3>
                <p className={styles.shortDesc}>{project.shortDesc}</p>
                <p className={styles.longDesc}>{project.description}</p>
                <span className={styles.links}>
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
                </span>
            </div>
        </div>
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

export { ProjectCard };
