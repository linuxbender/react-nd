import type {ShapeData} from "@/types/CanvasTypes.ts";
import type {FC} from "react";

const Shape: FC<{ shape: ShapeData }> = ({shape}) => {
    const {type, x, y, label} = shape;
    const width = 120;
    const height = 80;
    const radius = 40;


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