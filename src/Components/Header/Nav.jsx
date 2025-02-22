import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./Nav.module.css";
import { ThemeContext } from "../../Context/ThemeProvider";

function Nav() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <nav className={`${styles.nav} ${darkMode ? styles.dark : null}`}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="projects">Projects</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li className={styles.toggle}>
                    <label htmlFor="light-dark-toggle">
                        <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
                        <input
                            id="light-dark-toggle"
                            name="light-dark-toggle"
                            type="checkbox"
                            onChange={toggleDarkMode}
                            checked={darkMode}
                        />
                        <span></span>
                    </label>
                </li>
            </ul>
        </nav>
    );
}

export { Nav };
