import Stage from "./stage";

const Board = ({ stages }) => {
  return (
    <div className="Board">
      {stages.map((it, index) => {
        return (
          <div key={index}>
            <Stage stageId={index} title={it} />
          </div>
        );
      })}
    </div>
  );
};

export default Board;
