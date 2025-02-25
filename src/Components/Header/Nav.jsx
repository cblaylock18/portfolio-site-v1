import { NavLink } from "react-router-dom";
import { useContext } from "react";
import styles from "./Nav.module.css";
import { ThemeContext } from "../../Context/ThemeProvider";

function Nav() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <nav className={`${styles.nav} ${darkMode ? styles.dark : ""}`}>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isActive ? styles.active : ""}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="projects"
                        className={({ isActive }) =>
                            `${isActive ? styles.active : ""}`
                        }
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="about"
                        className={({ isActive }) =>
                            `${isActive ? styles.active : ""}`
                        }
                    >
                        About
                    </NavLink>
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
