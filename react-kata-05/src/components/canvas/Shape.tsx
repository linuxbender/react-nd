import type {ShapeType} from "@/types/CanvasTypes.ts";
import type {FC} from "react";

type ShapeProps = {
    id: string;
    type: ShapeType;
    x: number;
    y: number;
    width?: number;
    height?: number;
    radius?: number;
    color?: string;
    label?: string;
}

const Shape: FC<ShapeProps> = ({type, x, y, width = 100, height = 60, radius = 40, label}) => {
    const centerX = type === 'rectangle' ? x + width / 2 : x;
    const centerY = type === 'rectangle' ? y + height / 2 : y;

    return (
        <>
            {type === 'rectangle' && (
                <>
                    <rect x={x} y={y} width={width} height={height} fill="#f9f9f9" stroke="#333"/>
                    <text x={centerX} y={centerY} textAnchor="middle" dominantBaseline="middle"
                          fontSize="14">{label}</text>
                </>
            )}
            {type === 'circle' && (
                <>
                    <circle cx={x} cy={y} r={radius} fill="#def" stroke="#333"/>
                    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="14">{label}</text>
                </>
            )}
        </>
    )
}

export default Shape;