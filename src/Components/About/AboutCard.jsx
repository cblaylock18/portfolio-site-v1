import styles from "./AboutCard.module.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import PropTypes from "prop-types";
import { Caret } from "../../assets/SVGs/Caret";

function AboutCard({
    about = {
        id: 1,
        title: "Sample",
        category: "Travel",
        details: "An error occurred.",
        imgs: [
            {
                src: "./favicon.png",
                id: 1,
                alt: "an error occurred for this image",
            },
        ],
    },
}) {
    const { darkMode } = useContext(ThemeContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = about.imgs ? about.imgs.length : 0;

    const handlePrev = () => {
        currentIndex > 0
            ? setCurrentIndex(currentIndex - 1)
            : currentIndex === 0
            ? setCurrentIndex(totalImages - 1)
            : null;
    };

    const handleNext = () => {
        currentIndex === totalImages - 1
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className={`${styles.aboutCard} ${darkMode ? styles.dark : null}`}>
            <div className={styles.infoContainer}>
                <h4>{about.title}</h4>
                <p className={styles.details}>{about.details}</p>
            </div>
            <div className={styles.slider}>
                {totalImages > 1 && (
                    <button onClick={handlePrev} className={styles.prev}>
                        <Caret darkMode={darkMode} direction="left" />
                    </button>
                )}
                <div
                    className={styles.imageContainer}
                    style={{
                        width: `${totalImages * 100}%`,
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: "transform 0.5s ease",
                    }}
                >
                    {about.imgs &&
                        about.imgs.map((img) => {
                            return (
                                <img key={img.id} src={img.src} alt={img.alt} />
                            );
                        })}
                </div>
                {totalImages > 1 && (
                    <button onClick={handleNext} className={styles.next}>
                        <Caret darkMode={darkMode} direction="right" />
                    </button>
                )}
            </div>
        </div>
    );
}

AboutCard.propTypes = {
    about: PropTypes.shape({
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        details: PropTypes.string,
        imgs: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string,
                id: PropTypes.number,
                alt: PropTypes.string,
            })
        ),
    }),
};

export { AboutCard };
