import * as C from "@/types/ChessConstants.ts";
import type {Board} from "@/types/ChessTypes.ts";

export const createInitialBoard = (): Board => {
    const board: Board = new Array(120).fill(C.BORDER);

    // Utility zum Setzen auf dem Board
    const set = (row: number, col: number, piece: number) => {
        const index = (row + 2) * 10 + (col + 1); // Mailbox-Formel
        board[index] = piece;
    };

    // Weiße Hauptreihe (row 0)
    const whiteMain = [C.WR, C.WN, C.WB, C.WQ, C.WK, C.WB, C.WN, C.WR];
    for (let col = 0; col < 8; col++) {
        set(0, col, whiteMain[col]); // Reihe 1
        set(1, col, C.WP);           // Reihe 2: weiße Bauern
    }

    // Schwarze Hauptreihe (row 7)
    const blackMain = [C.BR, C.BN, C.BB, C.BQ, C.BK, C.BB, C.BN, C.BR];
    for (let col = 0; col < 8; col++) {
        set(6, col, C.BP);           // Reihe 7: schwarze Bauern
        set(7, col, blackMain[col]); // Reihe 8
    }

    // Mittelfeld (rows 2–5): leer
    for (let row = 2; row <= 5; row++) {
        for (let col = 0; col < 8; col++) {
            set(row, col, C.EMPTY);
        }
    }

    return board;
};
