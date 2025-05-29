import {useEffect, useState} from "react";
// This hook tracks the window size and updates the width and height whenever the window is resized.
const useWindowSize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const abortController = new AbortController()
        const handleWindowSizeChange = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleWindowSizeChange, {signal: abortController.signal});

        return () => abortController.abort()
    }, [windowWidth, windowHeight]);

    return {w: windowWidth, h: windowHeight};
};

export default useWindowSize;
