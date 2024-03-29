import { useContext } from "react";
import Card from "./card";
import { DataContext } from "../DataContext";

const Stage = ({ stageId, title }) => {
  const { list } = useContext(DataContext);
  const cardList = [...list.filter((it) => it.stage === stageId)];

  return (
    <div className="Stage">
      <div>{title}</div>
      {cardList.map((it, index) => (
        <Card key={index} data={it} />
      ))}
    </div>
  );
};

export default Stage;
