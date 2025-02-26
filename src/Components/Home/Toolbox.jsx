import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import styles from "./Toolbox.module.css";
import { toolbox } from "./toolbox";

function Toolbox() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section
            aria-labelledby="tech-toolbox-section-header"
            className={`${styles.toolbox} ${darkMode ? styles.dark : ""}`}
        >
            <h2 id="tech-toolbox-section-header">Tech Toolbox</h2>
            <div className={styles.tech}>
                {toolbox.map((tool) => {
                    return (
                        <p key={tool.id} className={styles.tool}>
                            {tool.tool}
                        </p>
                    );
                })}
            </div>
        </section>
    );
}

export { Toolbox };
