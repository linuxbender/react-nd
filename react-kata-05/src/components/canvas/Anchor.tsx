import type {FC} from "react";
import type {AnchorPoint} from "@/types/CanvasTypes.ts";

const Anchor: FC<AnchorPoint> = ({x, y}) => (
    <circle cx={x} cy={y} r={4} fill="red"/>
);

export default Anchor;