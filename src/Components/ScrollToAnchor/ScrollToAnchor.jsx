import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
    const location = useLocation();
    const lastHash = useRef("");

    window.scrollTo(0, 0);

    // listen to location change using useEffect with location as dependency
    // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
    useEffect(() => {
        if (location.hash) {
            lastHash.current = location.hash.slice(1); // store safe hash without #
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(() => {
                const element = document.getElementById(lastHash.current);
                if (element) {
                    const yOffset = -114; // desired offset (negative to push content down)
                    const y =
                        element.getBoundingClientRect().top +
                        window.scrollY +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
                lastHash.current = "";
            }, 100);
        }
    }, [location]);

    return null;
}

export default ScrollToAnchor;
