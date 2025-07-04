import {generateSlidingMoves} from './generateSlidingMoves';
import {bishopDirections, queenDirections, rookDirections} from './moveOffsets';
import type {Board, Move} from "@/types/ChessTypes.ts";
import * as C from "@/types/ChessConstants.ts";

export const generateAllWhiteSlidingMoves = (board: Board): Move[] => {
    const moves: Move[] = [];

    for (let i = 0; i < 120; i++) {
        const piece = board[i];

        switch (piece) {
            case C.WB:
                moves.push(...generateSlidingMoves(board, i, bishopDirections, true));
                break;
            case C.WR:
                moves.push(...generateSlidingMoves(board, i, rookDirections, true));
                break;
            case C.WQ:
                moves.push(...generateSlidingMoves(board, i, queenDirections, true));
                break;
            default:
                break;
        }
    }

    return moves;
};
