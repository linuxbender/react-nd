import type {Board, Move} from "@/types/ChessTypes.ts";
import * as C from "@/types/ChessConstants.ts";

export const generatePawnMoves = (
    board: Board,
    index: number,
    isWhite: boolean,
    enPassantTarget: number | null
): Move[] => {
    const moves: Move[] = [];
    // Weiß bewegt sich von row 1 nach row 7 (+10 im Mailbox)
    // Schwarz bewegt sich von row 6 nach row 0 (-10 im Mailbox)
    const forward = isWhite ? 10 : -10;
    const startRow = isWhite ? 1 : 6;
    const promotionRow = isWhite ? 7 : 0;

    // row berechnen aus Mailbox-Index
    const row = Math.floor(index / 10) - 2;

    // 1 Feld vorwärts
    const oneForward = index + forward;
    if (board[oneForward] === C.EMPTY) {
        const toRow = Math.floor(oneForward / 10) - 2;
        if (toRow === promotionRow) {
            // Promotion
            const promotionPieces = isWhite
                ? [C.WQ, C.WR, C.WB, C.WN]
                : [C.BQ, C.BR, C.BB, C.BN];
            for (const promo of promotionPieces) {
                moves.push({from: index, to: oneForward, promotion: promo});
            }
        } else {
            moves.push({from: index, to: oneForward});
        }

        // 2 Felder vorwärts vom Startfeld
        if (row === startRow) {
            const twoForward = index + forward * 2;
            if (board[twoForward] === C.EMPTY) {
                moves.push({from: index, to: twoForward});
            }
        }
    }

    // Diagonal schlagen
    const captureOffsets = isWhite ? [9, 11] : [-9, -11];
    for (const offset of captureOffsets) {
        const target = index + offset;
        const dest = board[target];

        if (dest === C.BORDER) continue;

        // Normales Schlagen
        if (dest !== C.EMPTY && ((isWhite && dest < 0) || (!isWhite && dest > 0))) {
            const toRow = Math.floor(target / 10) - 2;
            if (toRow === promotionRow) {
                const promotionPieces = isWhite
                    ? [C.WQ, C.WR, C.WB, C.WN]
                    : [C.BQ, C.BR, C.BB, C.BN];
                for (const promo of promotionPieces) {
                    moves.push({from: index, to: target, captured: dest, promotion: promo});
                }
            } else {
                moves.push({from: index, to: target, captured: dest});
            }
        }

        // En passant
        if (enPassantTarget !== null && target === enPassantTarget) {
            moves.push({from: index, to: target, enPassant: true});
        }
    }

    return moves;
};
