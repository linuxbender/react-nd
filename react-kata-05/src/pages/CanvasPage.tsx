import type {FC} from "react";
import type {AnchorPoint} from "@/types/CanvasTypes.ts";
import Connector from "@/components/canvas/Connector.tsx";
import Shape from "@/components/canvas/Shape.tsx";
import Anchor from "@/components/canvas/Anchor.tsx";

const CanvasPage: FC = () => {
    const rectX = 100;
    const rectY = 100;
    const rectWidth = 120;
    const rectHeight = 80;

    const circleX = 400;
    const circleY = 200;
    const circleRadius = 40;

    const rectAnchor: AnchorPoint = {
        x: rectX + rectWidth,
        y: rectY + rectHeight / 2,
    };

    const circleAnchor: AnchorPoint = {
        x: circleX - circleRadius,
        y: circleY,
    };
    return (
        <svg width="100%" height="100vh" style={{border: '1px solid #ccc'}}>
            <defs>
                <marker
                    id="arrow"
                    markerWidth="10"
                    markerHeight="10"
                    refX="10"
                    refY="5"
                    orient="auto"
                >
                    <path d="M0,0 L10,5 L0,10 Z" fill="black"/>
                </marker>
            </defs>


            <Shape type="rectangle" x={rectX} y={rectY} width={rectWidth} height={rectHeight} label="Box A" id={"1"}/>
            <Shape type="circle" x={circleX} y={circleY} radius={circleRadius} label="Circle B" id={"2"}/>


            <Anchor {...rectAnchor} />
            <Anchor {...circleAnchor} />

            <Connector from={rectAnchor} to={circleAnchor}/>
        </svg>
    );
}
export default CanvasPage;