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
            <img src="favicon.png" alt="Christopher Blaylock logo" />
            <div className={styles.links}>
                <a
                    href="https://github.com/cblaylock18"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Christopher Blaylock GitHub Profile"
                >
                    Github <GithubSVG darkMode={darkMode} />
                </a>
                <a
                    href="https://www.linkedin.com/in/christopher-w-blaylock/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Christopher Blaylock LinkedIn Profile"
                >
                    LinkedIn <LinkedInSVG darkMode={darkMode} />
                </a>
                <a
                    href={resume}
                    download
                    aria-label="Download Christopher Blaylock's Resume (PDF, 200kb)"
                >
                    Download Resume (PDF 200kb)
                </a>
            </div>
            <p className={styles.copyright}>
                © 2025 Christopher Blaylock. All rights reserved.
            </p>
        </footer>
    );
}

export { Footer };
