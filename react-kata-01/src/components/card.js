import { useContext } from "react";
import { DataContext } from "../DataContext";

const Card = ({ data }) => {
  const { currentTask } = useContext(DataContext);

  return (
    <div className="Card" onClick={() => currentTask(data)}>
      {data.name}
    </div>
  );
};

export default Card;
