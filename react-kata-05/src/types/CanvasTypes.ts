export type AnchorPoint = {
    shapeId: string;
    x: number;
    y: number;
};

export type ShapeType = 'circle' | 'rectangle';

export type ShapeData = {
    id: string;
    type: ShapeType;
    x: number;
    y: number;
    label: string;
};

export type AnchorRef = {
    shapeId: string;
    anchorIndex: number;
};

export type Connection = {
    from: AnchorRef;
    to: AnchorRef;
};
