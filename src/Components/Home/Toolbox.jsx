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
            {toolbox.map((sectionObj) => (
                <div key={sectionObj.section} className={styles.section}>
                    <h3 className={styles.sectionHeader}>
                        {sectionObj.section}
                    </h3>
                    <div className={styles.tech}>
                        {sectionObj.tools.map((tool) => (
                            <p key={tool.id} className={styles.tool}>
                                {tool.tool}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export { Toolbox };
