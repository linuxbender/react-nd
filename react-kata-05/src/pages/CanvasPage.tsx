import {type FC, type MouseEvent, useRef, useState} from "react";
import type {AnchorPoint, ShapeData, ShapeType} from "@/types/CanvasTypes.ts";
import Connector from "@/components/canvas/Connector.tsx";
import Shape from "@/components/canvas/Shape.tsx";
import Anchor from "@/components/canvas/Anchor.tsx";

const CanvasPage: FC = () => {

    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [shapes, setShapes] = useState<ShapeData[]>([
        {id: 'rect1', type: 'rectangle', x: 100, y: 100, label: 'Box A'},
        {id: 'circle1', type: 'circle', x: 400, y: 200, label: 'Circle B'},
    ]);

    const svgRef = useRef<SVGSVGElement | null>(null);
    const offset = useRef<{ x: number; y: number }>({x: 0, y: 0});
    const idCounter = useRef(1);

    const handleMouseDown = (e: MouseEvent, id: string) => {
        e.stopPropagation();
        const svg = svgRef.current!;
        const pt = svg.createSVGPoint();
        pt.x = e.clientX;
        pt.y = e.clientY;
        const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
        const shape = shapes.find(s => s.id === id);
        if (shape) {
            offset.current = {x: svgP.x - shape.x, y: svgP.y - shape.y};
            setDraggingId(id);
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!draggingId) return;
        const svg = svgRef.current!;
        const pt = svg.createSVGPoint();
        pt.x = e.clientX;
        pt.y = e.clientY;
        const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());

        setShapes(prev =>
            prev.map(s =>
                s.id === draggingId
                    ? {...s, x: svgP.x - offset.current.x, y: svgP.y - offset.current.y}
                    : s
            )
        );
    };

    const handleMouseUp = () => {
        setDraggingId(null);
    };

    const addShape = (type: ShapeType) => {
        const id = `shape-${idCounter.current++}`;
        const label = type === 'rectangle' ? `Box ${idCounter.current - 1}` : `Circle ${idCounter.current - 1}`;
        const newShape: ShapeData = {
            id,
            type,
            x: 100 + (shapes.length * 30),
            y: 100 + (shapes.length * 30),
            label,
        };
        setShapes(prev => [...prev, newShape]);
    };

    const getAnchor = (shape: ShapeData): AnchorPoint => {
        if (shape.type === 'rectangle') {
            return {x: shape.x + 120, y: shape.y + 40}; // rechte Mitte
        } else {
            return {x: shape.x - 40, y: shape.y}; // linke Seite des Kreises
        }
    };

    const [rect, circle] = shapes;
    const from = getAnchor(rect);
    const to = getAnchor(circle);

    return (
        <>
            <div style={{padding: 10, background: '#f0f0f0'}}>
                <button onClick={() => addShape('rectangle')}>➕ Rechteck hinzufügen</button>
                <button onClick={() => addShape('circle')}>➕ Kreis hinzufügen</button>
            </div>
            <svg
                ref={svgRef}
                width="100%"
                height="100vh"
                style={{border: '1px solid #ccc', cursor: draggingId ? 'grabbing' : 'default'}}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >

                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 Z" fill="black"/>
                    </marker>
                </defs>

                {from && to && <Connector from={from} to={to} />}
                {from && <Anchor {...from} />}
                {to && <Anchor {...to} />}

                {shapes.map(shape => (
                    <g key={shape.id} onMouseDown={e => handleMouseDown(e, shape.id)}>
                        <Shape shape={shape}/>
                    </g>
                ))}
            </svg>
        </>
    );
}
export default CanvasPage;