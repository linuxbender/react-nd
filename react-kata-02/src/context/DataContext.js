import { createContext, useContext, useState } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [demo, setDemo] = useState("");
  const [list, setList] = useState([]);

  const logFun = (msg) => {
    setDemo(msg);
    console.log(msg);
  };

  const contex = { demo, setDemo, list, setList, logFun };

  return <DataContext.Provider value={contex}>{children}</DataContext.Provider>;
};

const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }
  return context;
};

export default useDataContext;
