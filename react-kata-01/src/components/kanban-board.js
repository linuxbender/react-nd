import Header from "./header";
import Board from "./board";
import KanbanEdit from "./kanban-edit";

const KanbanBoard = () => {
  const stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];

  return (
    <div className="KanbanBoard">
      <Header />
      <KanbanEdit stageCount={stagesNames.length - 1} />
      <Board stages={stagesNames} />
    </div>
  );
};

export default KanbanBoard;
