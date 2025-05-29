import {useEffect, useRef, useState} from "react";

const useTimeout = (callback, delay) => {
    const [ready, setReady] = useState(false);
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        if (typeof delay !== "number" && delay < 0) return;

        const timeoutId = setTimeout(() => {
            callback();
            setReady(prev => true);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [callback, delay]);

    return ready;
};

export default useTimeout;
