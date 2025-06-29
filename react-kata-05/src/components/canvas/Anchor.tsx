import type {FC} from "react";
import type {AnchorPoint} from "@/types/CanvasTypes.ts";

type AnchorProps = {
    anchor: AnchorPoint;
    onClick: (a: AnchorPoint) => void;
}

const Anchor: FC<AnchorProps> = ({ anchor, onClick}) => (
    <circle cx={anchor.x} cy={anchor.y} r={5}
        fill="red"
        stroke="black"
        onClick={e => {
            e.stopPropagation();
            onClick(anchor);
        }}
        style={{ cursor: 'pointer' }}
    />
);

export default Anchor;