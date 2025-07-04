import type {Board, Move} from "@/types/ChessTypes.ts";
import {generateKnightMoves} from "@/components/chess/generateKnightMoves.ts";
import * as C from "@/types/ChessConstants.ts";

export const generateAllWhiteKnightMoves = (board: Board): Move[] => {
    const moves: Move[] = [];

    for (let i = 0; i < 120; i++) {
        if (board[i] === C.WN) {
            moves.push(...generateKnightMoves(board, i));
        }
    }

    return moves;
};
