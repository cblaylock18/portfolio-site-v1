import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import { Bio } from "./Bio";
import { Toolbox } from "./Toolbox";
import { Experience } from "./Experience";
import styles from "./Home.module.css";

function Home() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <main className={`${styles.home} ${darkMode ? styles.dark : null}`}>
            <Bio></Bio>
            <Toolbox></Toolbox>
            <Experience></Experience>
        </main>
    );
}

export { Home };
