import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import headshot from "../../assets/headshot.jpg";
import linkedInBlack from "../../assets/linkedinBlackBackground.svg";
import linkedInWhite from "../../assets/linkedinWhiteBackground.svg";
import styles from "./Bio.module.css";

function Bio() {
    const { darkMode } = useContext(ThemeContext);

    const projectArray = [1, 2, 3, 4, 5, 6];

    return (
        <div className={`${styles.bio} ${darkMode ? styles.dark : null}`}>
            <div className={styles.personalInfo}>
                <img src={headshot} alt="Christopher Blaylock" />
                <p>
                    I'm a web developer building responsive, user-focused apps
                    with HTML, CSS, JavaScript, and React. Previously a U.S.
                    Navy Nuclear Engineer and Boeing Quality Engineer, I now
                    love creating smooth digital experiences and embracing new
                    challenges.
                </p>
                <a
                    href="https://www.linkedin.com/in/christopher-w-blaylock/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact Me via LinkedIn{" "}
                    <img src={darkMode ? linkedInBlack : linkedInWhite}></img>
                </a>
            </div>
            <div className={styles.personalProjects}>
                {projectArray.map((number) => (
                    <p key={number}>{number}</p>
                ))}
            </div>
        </div>
    );
}

export { Bio };
