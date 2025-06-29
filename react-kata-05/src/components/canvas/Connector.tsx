import type {AnchorPoint} from "@/types/CanvasTypes.ts";
import type {FC} from "react";

type ConnectorProps = {
    from: AnchorPoint,
    to: AnchorPoint
}

const Connector: FC<ConnectorProps> = ({from, to}) => (
    <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke="black"
        strokeWidth={2}
        markerEnd="url(#arrow)"
    />
);

export default Connector;