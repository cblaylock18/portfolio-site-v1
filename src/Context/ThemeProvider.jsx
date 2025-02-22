import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({
    darkMode: false,
    toggleDarkMode: () => {},
});

const userModePreference =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

function ThemeProvider({ children = <div>An error occurred.</div> }) {
    const [darkMode, setDarkMode] = useState(userModePreference);
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
