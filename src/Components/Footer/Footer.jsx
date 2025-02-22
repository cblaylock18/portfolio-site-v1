import { useContext } from "react";
import styles from "./Footer.module.css";
import resume from "../../assets/Docs/ChristopherBlaylockResume.pdf";
import { ThemeContext } from "../../Context/ThemeProvider";
import { GithubSVG } from "../../assets/SVGs/GithubSVG";
import { LinkedInSVG } from "../../assets/SVGs/LinkedInSVG";

function Footer() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <footer className={`${styles.footer} ${darkMode ? styles.dark : ""}`}>
            <img src="favicon.png" alt="site logo, CB" />
            <div className={styles.links}>
                <a
                    href="https://github.com/cblaylock18"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github <GithubSVG darkMode={darkMode}></GithubSVG>
                </a>
                <a
                    href="https://www.linkedin.com/in/christopher-w-blaylock/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn <LinkedInSVG darkMode={darkMode}></LinkedInSVG>
                </a>
                <a href={resume} download>
                    Download Resume (PDF 200kb)
                </a>
            </div>
            <p className={styles.copyright}>
                Copyright © 2025 Christopher Blaylock. All rights reserved.
            </p>
        </footer>
    );
}

export { Footer };
