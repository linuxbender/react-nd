/**
 * This file provides custom fetch functionality for React applications.
 * It includes a Provider component (FetchProvider) and a Hook (useFetch).
 *
 * FetchProvider allows intercepting fetch requests and adding pre and post interceptors.
 * useFetch is a Hook that utilizes the FetchProvider context to fetch data from a specific URL endpoint.
 *
 * FetchProvider Props:
 * - children: The child components to be wrapped by FetchProvider.
 * - preInterceptors: A list of functions to be executed before making a fetch request.
 * - postInterceptors: A list of functions to be executed after completing a fetch request.
 * - basePath: The base path to prepend to each fetch request URL endpoint.
 *
 * useFetch Parameters:
 * - url: The URL from which to fetch the data.
 * - options: The fetch options to be passed to the fetch request.
 *
 * FetchProvider and useFetch work together to provide a flexible and easy-to-use fetch integration in React applications.
 */

import { createContext, useContext, useEffect, useState, useRef } from "react";

const FetchContext = createContext(null);

export const FetchProvider = ({
  children,
  preInterceptors = [],
  postInterceptors = [],
  basePath = null,
}) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  if (!basePath) throw new Error("FetchContex.Provider basePath must be set");

  const executePreInterceptors = (url, options = {}) =>
    preInterceptors.forEach((it) => it(url, options));

  const executePostInterceptors = (url, options = {}, e = null) =>
    postInterceptors.forEach((it) => it(url, options, e));

  const fetchData = async (url, options) => {
    const endpoint = basePath + url;
    try {
      setLoading(true);
      executePreInterceptors(endpoint, options);

      const res = await fetch(endpoint, options);
      const data = await res.json();

      executePostInterceptors(endpoint, options);
      setLoading(false);

      return data;
    } catch (e) {
      setErrors([...errors, e]);
      executePostInterceptors(endpoint, options, e);
    } finally {
      setLoading(false);
    }
  };

  const contex = { loading, errors, fetchData };

  return (<FetchContext.Provider value={contex}>{children}</FetchContext.Provider>);
};

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const { loading, fetchData } = useContext(FetchContext);
  const optionsRef = useRef(options);
  const fetchDataRef = useRef(fetchData);

  if (!fetchData)
    throw new Error("useFetch must be used within a FetchContext");

  useEffect(() => {
    const executFetch = async () => {
      const response = await fetchDataRef.current(url, optionsRef.current);
      setData(response);
    };
    executFetch();
  }, [url]);

  return [data, loading];
};

export default useFetch;
