export type Piece = number; // z.B. C.WP, C.BP, C.EMPTY

export type Board = Piece[]; // Länge: 120

export interface Move {
    from: number;
    to: number;
    captured?: Piece;
}
