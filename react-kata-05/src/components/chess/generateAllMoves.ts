import type {Board, CastlingRights, Move} from "@/types/ChessTypes.ts";
import * as C from "@/types/ChessConstants.ts";
import {generateKnightMoves} from "@/components/chess/generateKnightMoves.ts";
import {generateSlidingMoves} from "@/components/chess/generateSlidingMoves.ts";
import {generatePawnMoves} from "@/components/chess/generatePawnMoves.ts";
import {generateKingMoves} from "@/components/chess/generateKingMoves.ts";
import {isInCheck} from "@/components/chess/isInCheck.ts";
import {bishopDirections, queenDirections, rookDirections} from "@/components/chess/moveOffsets.ts";

/**
 * Alle pseudo-legalen Züge für eine Figur auf dem angegebenen Index.
 * Danach werden Züge gefiltert, die den eigenen König in Schach lassen.
 */
export const generateAllMoves = (
    board: Board,
    index: number,
    isWhite: boolean,
    enPassantTarget: number | null,
    castlingRights: CastlingRights
): Move[] => {
    const piece = board[index];
    let pseudoMoves: Move[] = [];

    const absPiece = Math.abs(piece);

    switch (absPiece) {
        case C.WP: // = 1, auch BP durch Math.abs
            pseudoMoves = generatePawnMoves(board, index, isWhite, enPassantTarget);
            break;
        case C.WN: // = 2
            pseudoMoves = generateKnightMoves(board, index, isWhite);
            break;
        case C.WB: // = 3
            pseudoMoves = generateSlidingMoves(board, index, bishopDirections, isWhite);
            break;
        case C.WR: // = 4
            pseudoMoves = generateSlidingMoves(board, index, rookDirections, isWhite);
            break;
        case C.WQ: // = 5
            pseudoMoves = generateSlidingMoves(board, index, queenDirections, isWhite);
            break;
        case C.WK: // = 6
            pseudoMoves = generateKingMoves(board, index, isWhite, castlingRights, isInCheck);
            break;
    }

    // Züge filtern, die den eigenen König in Schach lassen
    return pseudoMoves.filter(move => {
        const testBoard = applyMoveToBoard(board, move);
        return !isInCheck(testBoard, isWhite);
    });
};

/**
 * Wendet einen Zug auf eine Kopie des Boards an (für Schach-Prüfung).
 */
export const applyMoveToBoard = (board: Board, move: Move): Board => {
    const newBoard = [...board];
    const piece = newBoard[move.from];

    newBoard[move.to] = move.promotion ?? piece;
    newBoard[move.from] = C.EMPTY;

    // En passant: geschlagenen Bauern entfernen
    if (move.enPassant) {
        const isWhitePiece = piece > 0;
        const capturedPawnIndex = isWhitePiece ? move.to - 10 : move.to + 10;
        newBoard[capturedPawnIndex] = C.EMPTY;
    }

    // Rochade: Turm mitbewegen
    if (move.castling === 'WK') {
        newBoard[22] = C.WR;
        newBoard[24] = C.EMPTY;
    } else if (move.castling === 'WQ') {
        newBoard[20] = C.WR;
        newBoard[17] = C.EMPTY;
    } else if (move.castling === 'BK') {
        newBoard[92] = C.BR;
        newBoard[94] = C.EMPTY;
    } else if (move.castling === 'BQ') {
        newBoard[90] = C.BR;
        newBoard[87] = C.EMPTY;
    }

    return newBoard;
};

/**
 * Alle legalen Züge für alle Figuren einer Farbe.
 */
export const generateAllMovesForColor = (
    board: Board,
    isWhite: boolean,
    enPassantTarget: number | null,
    castlingRights: CastlingRights
): Move[] => {
    const moves: Move[] = [];
    for (let i = 0; i < board.length; i++) {
        const piece = board[i];
        if (piece === C.EMPTY || piece === C.BORDER) continue;
        if (isWhite && piece < 0) continue;
        if (!isWhite && piece > 0) continue;
        moves.push(...generateAllMoves(board, i, isWhite, enPassantTarget, castlingRights));
    }
    return moves;
};
