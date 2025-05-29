import {createContext, useContext, useEffect, useState} from "react";

const FetchContext = createContext(null);

export const FetchProvider = ({
                                  children,
                                  preInterceptors = [],
                                  postInterceptors = [],
                                  basePath = "",
                              }) => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    if (!basePath) throw new Error("FetchContext.Provider basePath must be set");

    const executePreInterceptors = async (url, options = {}) => {
        for (const it of preInterceptors) {
            await it(url, options);
        }
    };

    const executePostInterceptors = async (url, options = {}, error = null) => {
        for (const it of postInterceptors) {
            await it(url, options, error);
        }
    };

    const fetchData = async (url, options) => {
        const endpoint = basePath + url;
        setLoading(true);
        try {
            await executePreInterceptors(endpoint, options);

            const res = await fetch(endpoint, options);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();

            await executePostInterceptors(endpoint, options, null);
            return data;
        } catch (e) {
            setErrors(prev => [...prev, e]);
            await executePostInterceptors(endpoint, options, e);
            throw e;
        } finally {
            setLoading(false);
        }
    };

    const contextValue = {loading, errors, fetchData};

    return (
        <FetchContext.Provider value={contextValue}>
            {children}
        </FetchContext.Provider>
    );
};

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const {loading, fetchData} = useContext(FetchContext);

    if (!fetchData)
        throw new Error("useFetch must be used within a FetchContext");

    useEffect(() => {
        let isMounted = true;
        const abortController = new AbortController();

        const executeFetch = async () => {
            try {
                const response = await fetchData(url, options,{ signal: abortController.signal });
                if (isMounted) setData(response);
            } catch {
                if (isMounted) setData(null);
            } finally {
                isMounted = false;
            }
        };
        executeFetch();
        return () => {
            isMounted = false;
            abortController.abort();
        };
    }, [url, JSON.stringify(options)]);

    return [data, loading];
};

export default useFetch;