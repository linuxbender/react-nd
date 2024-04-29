import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

const fetchData = async () => {
  //const {data, loading} = useFetch("https://dummyjson.com/products")
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};

const DataComponent = () => {
  const [data, setData] = useState(null);

  // Daten beim ersten Rendern der Komponente laden
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);
  if (!data) {
    // Ladezustand, während Daten abgerufen werden
    return <Loading />;
  }

  // Daten anzeigen, sobald sie verfügbar sind
  return (
    <div>
      <h1>Data:</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default DataComponent;
