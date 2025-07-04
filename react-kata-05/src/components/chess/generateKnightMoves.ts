import type {Board, Move} from "@/types/ChessTypes.ts";
import {knightOffsets} from "@/components/chess/moveOffsets.ts";
import * as C from "@/types/ChessConstants.ts";

export const generateKnightMoves = (board: Board, index: number): Move[] => {
    const piece = board[index];
    const isWhite = piece > 0;

    const moves: Move[] = [];

    for (const offset of knightOffsets) {
        const target = index + offset;
        const destination = board[target];

        if (destination === C.BORDER) continue; // Rand

        // Verhindere Schlag auf eigene Figuren
        if (isWhite && destination > 0) continue;
        if (!isWhite && destination < 0) continue;

        moves.push({
            from: index,
            to: target,
            captured: destination !== C.EMPTY ? destination : undefined,
        });
    }

    return moves;
};
