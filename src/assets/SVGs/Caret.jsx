import PropTypes from "prop-types";

function Caret({ darkMode = false, direction = "left" }) {
    const stroke = darkMode ? "white" : "black";

    return (
        <>
            {direction === "left" ? (
                <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.9268 18.8389C13.7351 19.5461 15 18.9721 15 17.8982L15 6.10192C15 5.02797 13.7351 4.454 12.9268 5.1612L6.61617 10.683C5.81935 11.3802 5.81935 12.6198 6.61617 13.317L12.9268 18.8389ZM13.5 17.3472L7.60393 12.1882C7.4901 12.0886 7.4901 11.9115 7.60393 11.8119L13.5 6.65286L13.5 17.3472Z"
                        fill={stroke}
                    />
                </svg>
            ) : (
                <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.0731 18.8389C10.2649 19.5461 9 18.9721 9 17.8982L9 6.10192C9 5.02797 10.2649 4.454 11.0731 5.1612L17.3838 10.683C18.1806 11.3802 18.1806 12.6198 17.3838 13.317L11.0731 18.8389ZM10.5 17.3472L16.396 12.1882C16.5099 12.0886 16.5099 11.9115 16.396 11.8119L10.5 6.65286L10.5 17.3472Z"
                        fill={stroke}
                    />
                </svg>
            )}
        </>
    );
}

Caret.propTypes = {
    darkMode: PropTypes.bool,
    direction: PropTypes.oneOf(["left", "right"]),
};

export { Caret };
