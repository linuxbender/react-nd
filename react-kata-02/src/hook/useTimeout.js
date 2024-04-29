import { useState, useEffect } from "react";

const useTimeout = (callback, delay) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callback();
      setReady(prev => prev = true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);

  return ready;
};

export default useTimeout;
