import * as C from "@/types/ChessConstants.ts";

export const pieceToUnicode = (piece: number): string => {
    const map: Record<number, string> = {
        [C.WP]: '♙',
        [C.WN]: '♘',
        [C.WB]: '♗',
        [C.WR]: '♖',
        [C.WQ]: '♕',
        [C.WK]: '♔',

        [C.BP]: '♟',
        [C.BN]: '♞',
        [C.BB]: '♝',
        [C.BR]: '♜',
        [C.BQ]: '♛',
        [C.BK]: '♚',
    };

    return map[piece] ?? '';
};
