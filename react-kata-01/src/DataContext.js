import { createContext, useState } from "react";

export const DataContext = createContext();
export const emptyFunc = () => {};
export const emptyString = "";

const emptyItem = { name: emptyString };

export const DataProvider = ({ children }) => {
  const [selectedTask, setSelectedTask] = useState(emptyItem);
  const [list, setList] = useState([
    { name: "Task 0", stage: 0 },
    { name: "Task 1", stage: 0 },
    { name: "Task 2", stage: 0 },
    { name: "Task 3", stage: 0 },
    { name: "Task 4", stage: 1 },
    { name: "Task 5", stage: 1 },
    { name: "Task 6", stage: 1 },
    { name: "Task 7", stage: 2 },
    { name: "Task 8", stage: 2 },
    { name: "Task 9", stage: 3 },
  ]);

  const addNewTask = (it) => {
    if (it.name.trim().length > 0) {
      setList([...list, it]);
    }
  };

  const currentTask = (it) => {
    setSelectedTask(it);
  };

  const deleteTask = (it) => {
    const removeTask = list.filter((item) => item !== it);

    setList(removeTask);
    setSelectedTask(emptyItem);
  };

  const moveTaskLeft = (it) => {
    const newPosition = list.map((item) => {
      if (item === it) {
        item.stage -= 1;
      }
      return item;
    });
    setList(newPosition);
  };

  const moveTaskRight = (it) => {
    const newPosition = list.map((item) => {
      if (item === it) {
        item.stage += 1;
      }
      return item;
    });
    setList(newPosition);
  };

  const context = {
    list,
    selectedTask,
    addNewTask,
    currentTask,
    deleteTask,
    moveTaskLeft,
    moveTaskRight,
  };

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};
