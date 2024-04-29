import React, { Suspense } from "react";
import DataComponent from "./components/DataComponent/DataComponent";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Board from "./components/Board/Board";

const App = () => {
  return (
    <div>
      <h1>Fetching Data Example</h1>
      <div>learn react</div>
      <Suspense fallback={<Loading />}>
        <Header />
        <Board />
        <DataComponent />
      </Suspense>
    </div>
  );
};

export default App;
