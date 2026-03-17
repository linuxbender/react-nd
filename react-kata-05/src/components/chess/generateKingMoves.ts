import type {Board, CastlingRights, Move} from "@/types/ChessTypes.ts";
import * as C from "@/types/ChessConstants.ts";
import {queenDirections} from "@/components/chess/moveOffsets.ts";

export const generateKingMoves = (
    board: Board,
    index: number,
    isWhite: boolean,
    castlingRights: CastlingRights,
    isInCheckFn: (b: Board, white: boolean) => boolean
): Move[] => {
    const moves: Move[] = [];

    // Normaler König-Zug: 1 Schritt in jede Richtung
    for (const dir of queenDirections) {
        const target = index + dir;
        const dest = board[target];
        if (dest === C.BORDER) continue;
        if (dest === C.EMPTY || (isWhite && dest < 0) || (!isWhite && dest > 0)) {
            moves.push({from: index, to: target, captured: dest !== C.EMPTY ? dest : undefined});
        }
    }

    // Rochade
    if (isWhite) {
        // Kurze Rochade (Königsseite): e1=21, f1=22, g1=23, h1=24
        if (castlingRights.WK &&
            board[22] === C.EMPTY && board[23] === C.EMPTY &&
            !isInCheckFn(board, true)) {
            // König darf nicht durch angegriffene Felder ziehen
            const boardF = [...board];
            boardF[22] = C.WK;
            boardF[21] = C.EMPTY;
            if (!isInCheckFn(boardF, true)) {
                const boardG = [...board];
                boardG[23] = C.WK;
                boardG[21] = C.EMPTY;
                if (!isInCheckFn(boardG, true)) {
                    moves.push({from: 21, to: 23, castling: 'WK'});
                }
            }
        }
        // Lange Rochade (Damenseite): e1=21, d1=20, c1=19, b1=18, a1=17
        if (castlingRights.WQ &&
            board[20] === C.EMPTY && board[19] === C.EMPTY && board[18] === C.EMPTY &&
            !isInCheckFn(board, true)) {
            const boardD = [...board];
            boardD[20] = C.WK;
            boardD[21] = C.EMPTY;
            if (!isInCheckFn(boardD, true)) {
                const boardC = [...board];
                boardC[19] = C.WK;
                boardC[21] = C.EMPTY;
                if (!isInCheckFn(boardC, true)) {
                    moves.push({from: 21, to: 19, castling: 'WQ'});
                }
            }
        }
    } else {
        // Kurze Rochade Schwarz: e8=91, f8=92, g8=93, h8=94
        if (castlingRights.BK &&
            board[92] === C.EMPTY && board[93] === C.EMPTY &&
            !isInCheckFn(board, false)) {
            const boardF = [...board];
            boardF[92] = C.BK;
            boardF[91] = C.EMPTY;
            if (!isInCheckFn(boardF, false)) {
                const boardG = [...board];
                boardG[93] = C.BK;
                boardG[91] = C.EMPTY;
                if (!isInCheckFn(boardG, false)) {
                    moves.push({from: 91, to: 93, castling: 'BK'});
                }
            }
        }
        // Lange Rochade Schwarz: e8=91, d8=90, c8=89, b8=88, a8=87
        if (castlingRights.BQ &&
            board[90] === C.EMPTY && board[89] === C.EMPTY && board[88] === C.EMPTY &&
            !isInCheckFn(board, false)) {
            const boardD = [...board];
            boardD[90] = C.BK;
            boardD[91] = C.EMPTY;
            if (!isInCheckFn(boardD, false)) {
                const boardC = [...board];
                boardC[89] = C.BK;
                boardC[91] = C.EMPTY;
                if (!isInCheckFn(boardC, false)) {
                    moves.push({from: 91, to: 89, castling: 'BQ'});
                }
            }
        }
    }

    return moves;
};
