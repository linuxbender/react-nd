import { useState, useContext } from "react";
import { DataContext, emptyFunc, emptyString } from "../DataContext";

const KanbanEdit = ({ stageCount }) => {
  const [newTask, setNewTask] = useState(emptyString);
  const { addNewTask, selectedTask, deleteTask, moveTaskLeft, moveTaskRight } =
    useContext(DataContext);

  if (stageCount === undefined || stageCount <= 0) {
    return <div>No stage found</div>;
  }

  const handleSaveTaskClick = () => {
    addNewTask({ name: newTask, stage: 0 });
    setNewTask(emptyString);
  };

  const handleInsertNewTaskChange = e => setNewTask(e.target.value);
  const handleEnterKeyDown = e => e.key === "Enter" ? handleSaveTaskClick() : emptyFunc;

  return (
    <div className="Edit">
      <div>
        <input
          onChange={handleInsertNewTaskChange}
          onKeyDown={handleEnterKeyDown}
          value={newTask}
          id="input-new"
          placeholder="Insert new Task..."
        />
        <button onClick={handleSaveTaskClick} id="btn-new">
          Save Task
        </button>
      </div>
      <div>
        <input
          id="input-selected"
          value={selectedTask.name}
          placeholder="Selected Task..."
          disabled={true}
        />
        <button
          id="btn-right"
          onClick={() => moveTaskRight(selectedTask)}
          disabled={selectedTask.stage >= stageCount}
        >
          Move right
        </button>
        <button
          id="btn-left"
          onClick={() => moveTaskLeft(selectedTask)}
          disabled={selectedTask.stage <= 0}
        >
          Move left
        </button>
        <button id="btn-delete" onClick={() => deleteTask(selectedTask)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default KanbanEdit;
