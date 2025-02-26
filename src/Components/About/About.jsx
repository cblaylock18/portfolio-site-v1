import styles from "./About.module.css";
import { about } from "./about";
import { AboutCard } from "./AboutCard";
import { ThemeContext } from "../../Context/ThemeProvider";
import { useContext } from "react";

function About() {
    const { darkMode } = useContext(ThemeContext);

    let categories = [];

    about.map((item) => {
        !categories.includes(item.category)
            ? categories.push(item.category)
            : null;
    });

    return (
        <main className={`${styles.about} ${darkMode ? styles.dark : ""}`}>
            <h2>About</h2>
            <p>
                This is the place to be if you want to get to know me a little
                better. ☺
            </p>
            {categories.map((category) => {
                return (
                    <section key={category} aria-label={category}>
                        <h3>{category}</h3>
                        <div className={styles.categoryContainer}>
                            {about.map((item, index) => {
                                return item.category === category ? (
                                    <AboutCard
                                        key={item.id}
                                        about={item}
                                        imgLeft={index % 2 === 0}
                                    />
                                ) : null;
                            })}
                        </div>
                    </section>
                );
            })}
        </main>
    );
}

export { About };
