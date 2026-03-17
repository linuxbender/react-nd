import {useState} from 'react';
import type {CastlingRights, GameState, GameStatus, HistoryEntry, Move} from "@/types/ChessTypes.ts";
import * as C from "@/types/ChessConstants.ts";
import {createInitialBoard} from "@/utile/boardUtils.ts";
import {applyMoveToBoard, generateAllMoves, generateAllMovesForColor} from "@/components/chess/generateAllMoves.ts";
import {isInCheck} from "@/components/chess/isInCheck.ts";

const initialCastlingRights: CastlingRights = {WK: true, WQ: true, BK: true, BQ: true};

const createInitialGameState = (): GameState => ({
    board: createInitialBoard(),
    currentTurn: 'white',
    enPassantTarget: null,
    castlingRights: {...initialCastlingRights},
    moveHistory: [],
    status: 'playing',
    promotionPending: null,
});

const buildNotation = (board: number[], move: Move, piece: number): string => {
    const colLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const fromRow = Math.floor(move.from / 10) - 2;
    const fromCol = (move.from % 10) - 1;
    const toRow = Math.floor(move.to / 10) - 2;
    const toCol = (move.to % 10) - 1;

    const from = `${colLetters[fromCol]}${fromRow + 1}`;
    const to = `${colLetters[toCol]}${toRow + 1}`;
    const capture = board[move.to] !== C.EMPTY || move.enPassant ? 'x' : '-';

    if (move.castling === 'WK' || move.castling === 'BK') return 'O-O';
    if (move.castling === 'WQ' || move.castling === 'BQ') return 'O-O-O';

    const pieceLetters: Record<number, string> = {
        1: '', 2: 'N', 3: 'B', 4: 'R', 5: 'Q', 6: 'K',
    };
    const letter = pieceLetters[Math.abs(piece)] ?? '';
    return `${letter}${from}${capture}${to}`;
};

const updateCastlingRights = (
    rights: CastlingRights,
    move: Move,
    piece: number
): CastlingRights => {
    const r = {...rights};
    const absPiece = Math.abs(piece);
    if (absPiece === C.WK) { r.WK = false; r.WQ = false; }
    if (absPiece === C.BK) { r.BK = false; r.BQ = false; }
    // Turm bewegt
    if (move.from === 24) r.WK = false;
    if (move.from === 17) r.WQ = false;
    if (move.from === 94) r.BK = false;
    if (move.from === 87) r.BQ = false;
    // Turm geschlagen
    if (move.to === 24) r.WK = false;
    if (move.to === 17) r.WQ = false;
    if (move.to === 94) r.BK = false;
    if (move.to === 87) r.BQ = false;
    return r;
};

export const useGameState = () => {
    const [gameState, setGameState] = useState<GameState>(createInitialGameState());

    const legalMovesForSquare = (index: number): Move[] => {
        const piece = gameState.board[index];
        if (piece === C.EMPTY || piece === C.BORDER) return [];
        const isWhite = gameState.currentTurn === 'white';
        if (isWhite && piece < 0) return [];
        if (!isWhite && piece > 0) return [];
        return generateAllMoves(
            gameState.board,
            index,
            isWhite,
            gameState.enPassantTarget,
            gameState.castlingRights
        );
    };

    const makeMove = (move: Move) => {
        setGameState(prev => {
            if (prev.promotionPending !== null) return prev;

            const piece = prev.board[move.from];
            const isWhite = prev.currentTurn === 'white';
            const newBoard = applyMoveToBoard(prev.board, move);

            // En passant Target setzen (Bauer zieht 2 Felder)
            let newEnPassantTarget: number | null = null;
            if (Math.abs(piece) === C.WP && Math.abs(move.to - move.from) === 20) {
                newEnPassantTarget = (move.from + move.to) / 2;
            }

            // Rochade-Rechte aktualisieren
            const newCastlingRights = updateCastlingRights(prev.castlingRights, move, piece);

            // History-Eintrag
            const notation = buildNotation(prev.board, move, piece);
            const historyEntry: HistoryEntry = {
                move,
                piece,
                notation,
                previousEnPassantTarget: prev.enPassantTarget,
                previousCastlingRights: prev.castlingRights,
            };

            // Auf Promotion prüfen
            const promotionRow = isWhite ? 7 : 0;
            const toRow = Math.floor(move.to / 10) - 2;
            const isPromotion = Math.abs(piece) === C.WP && toRow === promotionRow && !move.promotion;

            if (isPromotion) {
                return {
                    ...prev,
                    board: newBoard,
                    promotionPending: move.to,
                    moveHistory: [...prev.moveHistory, historyEntry],
                    enPassantTarget: newEnPassantTarget,
                    castlingRights: newCastlingRights,
                };
            }

            // Nächsten Spieler bestimmen
            const nextTurn = isWhite ? 'black' : 'white';
            const nextIsWhite = nextTurn === 'white';

            // Spielstatus berechnen
            const inCheck = isInCheck(newBoard, nextIsWhite);
            const hasLegalMoves = generateAllMovesForColor(
                newBoard,
                nextIsWhite,
                newEnPassantTarget,
                newCastlingRights
            ).length > 0;

            let status: GameStatus;
            if (!hasLegalMoves) {
                status = inCheck ? 'checkmate' : 'stalemate';
            } else {
                status = inCheck ? 'check' : 'playing';
            }

            return {
                board: newBoard,
                currentTurn: nextTurn,
                enPassantTarget: newEnPassantTarget,
                castlingRights: newCastlingRights,
                moveHistory: [...prev.moveHistory, historyEntry],
                status,
                promotionPending: null,
            };
        });
    };

    const finishPromotion = (promotionPiece: number) => {
        setGameState(prev => {
            if (prev.promotionPending === null) return prev;
            const newBoard = [...prev.board];
            newBoard[prev.promotionPending] = promotionPiece;

            const isWhite = prev.currentTurn === 'white';
            const nextTurn = isWhite ? 'black' : 'white';
            const nextIsWhite = !isWhite;

            const inCheck = isInCheck(newBoard, nextIsWhite);
            const hasLegalMoves = generateAllMovesForColor(
                newBoard,
                nextIsWhite,
                prev.enPassantTarget,
                prev.castlingRights
            ).length > 0;

            let status: GameStatus;
            if (!hasLegalMoves) {
                status = inCheck ? 'checkmate' : 'stalemate';
            } else {
                status = inCheck ? 'check' : 'playing';
            }

            return {
                ...prev,
                board: newBoard,
                currentTurn: nextTurn,
                promotionPending: null,
                status,
            };
        });
    };

    const undoMove = () => {
        setGameState(prev => {
            if (prev.moveHistory.length === 0) return prev;
            const last = prev.moveHistory[prev.moveHistory.length - 1];
            const newBoard = [...prev.board];

            // Zug rückgängig machen
            newBoard[last.move.from] = last.piece;
            newBoard[last.move.to] = last.move.captured ?? C.EMPTY;

            // En passant rückgängig
            if (last.move.enPassant) {
                const isWhitePiece = last.piece > 0;
                const capturedPawnIndex = isWhitePiece ? last.move.to - 10 : last.move.to + 10;
                newBoard[capturedPawnIndex] = isWhitePiece ? C.BP : C.WP;
                newBoard[last.move.to] = C.EMPTY;
            }

            // Rochade rückgängig
            if (last.move.castling === 'WK') { newBoard[24] = C.WR; newBoard[22] = C.EMPTY; }
            if (last.move.castling === 'WQ') { newBoard[17] = C.WR; newBoard[20] = C.EMPTY; }
            if (last.move.castling === 'BK') { newBoard[94] = C.BR; newBoard[92] = C.EMPTY; }
            if (last.move.castling === 'BQ') { newBoard[87] = C.BR; newBoard[90] = C.EMPTY; }

            // Promotion rückgängig
            if (last.move.promotion) {
                newBoard[last.move.from] = last.piece;
                newBoard[last.move.to] = last.move.captured ?? C.EMPTY;
            }

            const previousTurn = prev.currentTurn === 'white' ? 'black' : 'white';
            const prevIsWhite = previousTurn === 'white';
            const inCheck = isInCheck(newBoard, prevIsWhite);

            return {
                ...prev,
                board: newBoard,
                currentTurn: previousTurn,
                enPassantTarget: last.previousEnPassantTarget,
                castlingRights: last.previousCastlingRights,
                moveHistory: prev.moveHistory.slice(0, -1),
                status: inCheck ? 'check' : 'playing',
                promotionPending: null,
            };
        });
    };

    const resetGame = () => {
        setGameState(createInitialGameState());
    };

    return {
        gameState,
        legalMovesForSquare,
        makeMove,
        finishPromotion,
        undoMove,
        resetGame,
    };
};
