import "./App.css";
import { DataProvider } from "./DataContext";
import KanbanBoard from "./components/kanban-board";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <KanbanBoard />
      </DataProvider>
    </div>
  );
};

export default App;
