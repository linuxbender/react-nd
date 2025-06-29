import {type FC, type MouseEvent, useRef, useState} from "react";
import type {AnchorPoint, Connection, ShapeData, ShapeType} from "@/types/CanvasTypes.ts";
import Connector from "@/components/canvas/Connector.tsx";
import Shape from "@/components/canvas/Shape.tsx";
import Anchor from "@/components/canvas/Anchor.tsx";

const CanvasPage: FC = () => {

    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [shapes, setShapes] = useState<ShapeData[]>([]);
    const [selectedAnchor, setSelectedAnchor] = useState<AnchorPoint | null>(null);
    const [connections, setConnections] = useState<Connection[]>([]);

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

    const getAnchorPoints = (shape: ShapeData): AnchorPoint[] => {
        if (shape.type === 'rectangle') {
            return [
                {shapeId: shape.id, x: shape.x + 120, y: shape.y + 40}, // rechte Mitte
                {shapeId: shape.id, x: shape.x, y: shape.y + 40},       // linke Mitte
            ];
        } else {
            return [
                {shapeId: shape.id, x: shape.x + 40, y: shape.y},
                {shapeId: shape.id, x: shape.x - 40, y: shape.y},
            ];
        }
    };

    const handleAnchorClick = (anchor: AnchorPoint) => {
        if (!selectedAnchor) {
            setSelectedAnchor(anchor); // Startpunkt
        } else {
            if (anchor.shapeId !== selectedAnchor.shapeId) {
                // Verbindung erstellen
                setConnections(prev => [...prev, {from: selectedAnchor, to: anchor}]);
            }
            setSelectedAnchor(null); // Reset
        }
    };

    return (
        <>
            <div style={{padding: 10, background: '#f0f0f0'}}>
                <button onClick={() => addShape('rectangle')}>➕ Rechteck hinzufügen</button>
                <button onClick={() => addShape('circle')}>➕ Kreis hinzufügen</button>
                {selectedAnchor && <span style={{marginLeft: 20}}>🔗 Verbindung aktiv – wähle Ziel</span>}
            </div>

            <svg ref={svgRef} width="100%" height="100vh"
                 style={{border: '1px solid #ccc', cursor: draggingId ? 'grabbing' : 'default'}}
                 onMouseMove={handleMouseMove}
                 onMouseUp={handleMouseUp}
                 onClick={() => setSelectedAnchor(null)}
            >
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 Z" fill="black"/>
                    </marker>
                </defs>

                {connections.map((conn, i) => (
                    <Connector key={i} from={conn.from} to={conn.to}/>
                ))}

                {shapes.flatMap(shape =>
                    getAnchorPoints(shape).map((anchor, i) => (
                        <Anchor key={`${shape.id}-anchor-${i}`} anchor={anchor} onClick={handleAnchorClick}/>
                    ))
                )}

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