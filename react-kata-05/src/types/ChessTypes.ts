export type Piece = number; // z.B. C.WP, C.BP, C.EMPTY

export type Board = Piece[]; // Länge: 120

export interface Move {
    from: number;
    to: number;
    captured?: Piece;
    promotion?: Piece;
    castling?: 'WK' | 'WQ' | 'BK' | 'BQ';
    enPassant?: boolean;
}

export interface HistoryEntry {
    move: Move;
    piece: Piece;
    notation: string;
    previousEnPassantTarget: number | null;
    previousCastlingRights: CastlingRights;
}

export interface CastlingRights {
    WK: boolean;
    WQ: boolean;
    BK: boolean;
    BQ: boolean;
}

export type GameStatus = 'playing' | 'check' | 'checkmate' | 'stalemate';

export interface GameState {
    board: Board;
    currentTurn: 'white' | 'black';
    enPassantTarget: number | null;
    castlingRights: CastlingRights;
    moveHistory: HistoryEntry[];
    status: GameStatus;
    promotionPending: number | null;
}
