import { useContext } from "react";
import styles from "./Header.module.css";
import { Nav } from "./Nav";
import { ThemeContext } from "../../Context/ThemeProvider";

function Header() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <header className={`${styles.header} ${darkMode ? styles.dark : ""}`}>
            <img src="favicon.png" alt="Christopher Blaylock logo" />
            <h1>Christopher Blaylock</h1>
            <Nav></Nav>
        </header>
    );
}

export { Header };
