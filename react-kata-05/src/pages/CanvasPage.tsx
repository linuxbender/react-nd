import {type FC, useRef, useState} from "react";
import type {AnchorPoint, AnchorRef, Connection, ShapeData, ShapeType} from "@/types/CanvasTypes.ts";
import Connector from "@/components/canvas/Connector.tsx";
import Shape from "@/components/canvas/Shape.tsx";
import Anchor from "@/components/canvas/Anchor.tsx";

const CanvasPage: FC = () => {

    const svgRef = useRef<SVGSVGElement | null>(null);
    const [shapes, setShapes] = useState<ShapeData[]>([]);
    const [connections, setConnections] = useState<Connection[]>([]);
    const [selectedAnchor, setSelectedAnchor] = useState<AnchorRef | null>(null);
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const offset = useRef<{ x: number; y: number }>({x: 0, y: 0});
    const idCounter = useRef(1);
    const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

    const getAnchorPoints = (shape: ShapeData): AnchorPoint[] => {
        if (shape.type === 'rectangle') {
            return [
                {x: shape.x + 120, y: shape.y + 40, shapeId: shape.id},
                {x: shape.x, y: shape.y + 40, shapeId: shape.id},
            ];
        } else {
            return [
                {x: shape.x + 40, y: shape.y, shapeId: shape.id},
                {x: shape.x - 40, y: shape.y, shapeId: shape.id},
            ];
        }
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

    const handleMouseDown = (e: React.MouseEvent, id: string) => {
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

    const handleMouseMove = (e: React.MouseEvent) => {
        if (draggingId) {
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
        }
        if (selectedAnchor) {
            const svg = svgRef.current!;
            const pt = svg.createSVGPoint();
            pt.x = e.clientX;
            pt.y = e.clientY;
            const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
            setMousePos({x: svgP.x, y: svgP.y});
        }
    };

    const handleMouseUp = () => {
        setDraggingId(null);
    };

    const handleAnchorClick = (shapeId: string, anchorIndex: number) => {
        const ref = {shapeId, anchorIndex};
        if (!selectedAnchor) {
            setSelectedAnchor(ref);
        } else {
            if (selectedAnchor.shapeId !== shapeId || selectedAnchor.anchorIndex !== anchorIndex) {
                setConnections(prev => [...prev, {from: selectedAnchor, to: ref}]);
            }
            setSelectedAnchor(null);
            setMousePos(null);
        }
    };

    const resolveAnchor = (ref: AnchorRef): AnchorPoint => {
        const shape = shapes.find(s => s.id === ref.shapeId);
        if (!shape) return {x: 0, y: 0, shapeId: ''};
        const points = getAnchorPoints(shape);
        return points[ref.anchorIndex];
    };

    return (
        <>
            <div style={{padding: 10, background: '#f0f0f0'}}>
                <button onClick={() => addShape('rectangle')}>➕ Rechteck</button>
                <button onClick={() => addShape('circle')}>➕ Kreis</button>
                {selectedAnchor && <span style={{marginLeft: 20}}>🔗 Wähle zweiten Punkt</span>}
            </div>
            <svg
                ref={svgRef}
                width="100%"
                height="100vh"
                style={{border: '1px solid #ccc', cursor: draggingId ? 'grabbing' : 'default'}}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onClick={() => {
                    setSelectedAnchor(null);
                    setMousePos(null);
                }}
            >
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 Z" fill="black"/>
                    </marker>
                </defs>

                {connections.map((conn, i) => (
                    <Connector key={i} from={resolveAnchor(conn.from)} to={resolveAnchor(conn.to)}/>
                ))}

                {selectedAnchor && mousePos && (
                    <Connector from={resolveAnchor(selectedAnchor)}
                               to={{...mousePos, shapeId: selectedAnchor.shapeId}}/>
                )}

                {shapes.flatMap((shape) =>
                    getAnchorPoints(shape).map((anchor, index) => (
                        <Anchor
                            key={`${shape.id}-anchor-${index}`}
                            anchor={anchor}
                            onClick={() => handleAnchorClick(shape.id, index)}
                        />
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