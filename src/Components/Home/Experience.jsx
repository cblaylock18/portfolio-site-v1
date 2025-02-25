import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../Context/ThemeProvider";
import { experience } from "./experience";
import styles from "./Experience.module.css";
import { RightArrow } from "../../assets/SVGs/RightArrow";

function ExperienceBlock({
    experience = [
        {
            id: 0,
            category: "Work",
            title: "Sample Experience",
            organization: "Sample",
            location: "Sample",
            date: "Sample",
            description: "An error occurred.",
        },
        {
            id: 1,
            category: "Education",
            title: "Sample Experience",
            organization: "Sample",
            location: "Sample",
            date: "Sample",
            description: "An error occurred.",
        },
    ],
}) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            className={`${styles.experienceBlock} ${
                darkMode ? styles.dark : ""
            }`}
        >
            <h3 className={styles.title}>{experience.title}</h3>
            <p className={styles.organization}>{experience.organization}</p>
            <p
                className={styles.data}
            >{`${experience.date} in ${experience.location}`}</p>
            <p className={styles.description}>{experience.description}</p>
            <RightArrow darkMode={darkMode} />
        </div>
    );
}

function Experience() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            className={`${styles.experience} ${darkMode ? styles.dark : ""}`}
        >
            <h2>Experience</h2>
            <div className={styles.work}>
                {experience.map((exp) => {
                    return exp.category === "Work" ? (
                        <ExperienceBlock key={exp.id} experience={exp} />
                    ) : null;
                })}
            </div>
            <h2>Education</h2>
            <div className={styles.education}>
                {experience.map((exp) => {
                    return exp.category === "Education" ? (
                        <ExperienceBlock key={exp.id} experience={exp} />
                    ) : null;
                })}
            </div>
        </div>
    );
}

ExperienceBlock.propTypes = {
    experience: PropTypes.shape({
        id: PropTypes.number,
        category: PropTypes.string,
        title: PropTypes.string,
        organization: PropTypes.string,
        location: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
    }),
};

export { Experience };
