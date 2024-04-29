import { useSyncExternalStore } from "react";

const getSnapshot = () => {
  return navigator.onLine;
};

const subscribe = (callback) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

const useOnlineStatus = () => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
};

export default useOnlineStatus;
