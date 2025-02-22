import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./ErrorPage.module.css";
import { ThemeContext } from "../../Context/ThemeProvider";

const ErrorPage = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`${styles.error} ${darkMode ? styles.dark : null}`}>
            <h1>Oh no, this route doesn&apos;t exist!</h1>
            <Link to="/">
                You can go back to the home page by clicking here, though!
            </Link>
        </div>
    );
};

export default ErrorPage;
