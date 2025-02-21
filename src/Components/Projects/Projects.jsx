import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

function Projects() {
    const array = [1, 2, 3];
    return (
        <div className={styles.div}>
            {array.map((num) => (
                <ProjectCard key={num}></ProjectCard>
            ))}
        </div>
    );
}

export { Projects };
