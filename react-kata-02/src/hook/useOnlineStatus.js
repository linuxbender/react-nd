import {useSyncExternalStore} from "react";

const getSnapshot = () => {
    return navigator.onLine;
};

const subscribe = (callback) => {
    const abortController = new AbortController();
    window.addEventListener("online", callback, {signal: abortController.signal});
    window.addEventListener("offline", callback, {signal: abortController.signal});
    return () => abortController.abort();
};

const useOnlineStatus = () => {
    return useSyncExternalStore(subscribe, getSnapshot);
};

export default useOnlineStatus;
