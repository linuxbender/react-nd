import type {Board} from "@/types/ChessTypes.ts";
import * as C from "@/types/ChessConstants.ts";
import {bishopDirections, knightOffsets, queenDirections, rookDirections} from "@/components/chess/moveOffsets.ts";

export const isInCheck = (board: Board, isWhite: boolean): boolean => {
    // König finden
    const kingPiece = isWhite ? C.WK : C.BK;
    const kingIndex = board.indexOf(kingPiece);
    if (kingIndex === -1) return false;

    // Springer-Angriff prüfen
    const enemyKnight = isWhite ? C.BN : C.WN;
    for (const offset of knightOffsets) {
        const target = kingIndex + offset;
        if (board[target] === enemyKnight) return true;
    }

    // Läufer/Dame (Diagonale)
    const enemyBishop = isWhite ? C.BB : C.WB;
    const enemyQueen = isWhite ? C.BQ : C.WQ;
    for (const dir of bishopDirections) {
        let target = kingIndex + dir;
        while (board[target] !== C.BORDER) {
            const dest = board[target];
            if (dest !== C.EMPTY) {
                if (dest === enemyBishop || dest === enemyQueen) return true;
                break;
            }
            target += dir;
        }
    }

    // Turm/Dame (gerade)
    const enemyRook = isWhite ? C.BR : C.WR;
    for (const dir of rookDirections) {
        let target = kingIndex + dir;
        while (board[target] !== C.BORDER) {
            const dest = board[target];
            if (dest !== C.EMPTY) {
                if (dest === enemyRook || dest === enemyQueen) return true;
                break;
            }
            target += dir;
        }
    }

    // König-Angriff (für legale König-Züge)
    const enemyKing = isWhite ? C.BK : C.WK;
    for (const dir of queenDirections) {
        const target = kingIndex + dir;
        if (board[target] === enemyKing) return true;
    }

    // Bauern-Angriff
    const enemyPawn = isWhite ? C.BP : C.WP;
    // Weiß: schwarze Bauern greifen von oben-diagonal an (+9, +11 vom weißen König)
    // Schwarz: weiße Bauern greifen von unten-diagonal an (-9, -11 vom schwarzen König)
    const pawnAttackOffsets = isWhite ? [9, 11] : [-9, -11];
    for (const offset of pawnAttackOffsets) {
        const target = kingIndex + offset;
        if (board[target] === enemyPawn) return true;
    }

    return false;
};
