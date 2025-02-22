import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import styles from "./Experience.module.css";

function Experience() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div
            className={`${styles.experience} ${darkMode ? styles.dark : null}`}
        >
            Experience
        </div>
    );
}

export { Experience };
