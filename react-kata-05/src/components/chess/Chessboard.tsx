import {type FC, useState} from 'react';
import type {GameState, Move} from "@/types/ChessTypes.ts";
import * as C from "@/types/ChessConstants.ts";
import {pieceToUnicode} from "@/utile/pieceUtils.ts";
import PromotionDialog from "@/components/chess/PromotionDialog.tsx";

const squareSize = 60;
const boardSize = squareSize * 8;
const coordOffset = 20;

interface ChessboardProps {
    gameState: GameState;
    legalMovesForSquare: (index: number) => Move[];
    makeMove: (move: Move) => void;
    finishPromotion: (piece: number) => void;
}

const Chessboard: FC<ChessboardProps> = ({gameState, legalMovesForSquare, makeMove, finishPromotion}) => {
    const {board, currentTurn, promotionPending} = gameState;

    const [draggedFrom, setDraggedFrom] = useState<number | null>(null);
    const [draggedPiece, setDraggedPiece] = useState<number | null>(null);
    const [legalMoves, setLegalMoves] = useState<Move[]>([]);
    const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
    const [selectedSquare, setSelectedSquare] = useState<number | null>(null);

    const isGameOver = gameState.status === 'checkmate' || gameState.status === 'stalemate';

    const handleMouseDown = (index: number, event: React.MouseEvent) => {
        if (isGameOver || promotionPending !== null) return;
        const piece = board[index];
        if (piece === C.EMPTY || piece === C.BORDER) return;
        const isWhite = currentTurn === 'white';
        if (isWhite && piece < 0) return;
        if (!isWhite && piece > 0) return;

        const moves = legalMovesForSquare(index);
        setDraggedFrom(index);
        setDraggedPiece(piece);
        setLegalMoves(moves);
        setSelectedSquare(index);
        setDragPosition({x: event.clientX, y: event.clientY});
        event.preventDefault();
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (draggedPiece !== null) {
            setDragPosition({x: event.clientX, y: event.clientY});
        }
    };

    const handleMouseUp = (event: React.MouseEvent) => {
        if (draggedFrom === null || draggedPiece === null) return;

        const svg = event.currentTarget as SVGSVGElement;
        const rect = svg.getBoundingClientRect();
        const x = event.clientX - rect.left - coordOffset;
        const y = event.clientY - rect.top;

        const col = Math.floor(x / squareSize);
        const row = 7 - Math.floor(y / squareSize);
        const toIndex = (row + 2) * 10 + (col + 1);

        const move = legalMoves.find(m => m.to === toIndex);
        if (move) {
            makeMove(move);
            setSelectedSquare(null);
        }

        setDraggedFrom(null);
        setDraggedPiece(null);
        setLegalMoves([]);
        setDragPosition(null);
    };

    const handleSquareClick = (index: number) => {
        if (isGameOver || promotionPending !== null) return;
        const piece = board[index];
        const isWhite = currentTurn === 'white';

        if (selectedSquare !== null && legalMoves.length > 0) {
            const move = legalMoves.find(m => m.to === index);
            if (move) {
                makeMove(move);
                setSelectedSquare(null);
                setLegalMoves([]);
                return;
            }
        }

        if (piece !== C.EMPTY && piece !== C.BORDER) {
            if ((isWhite && piece > 0) || (!isWhite && piece < 0)) {
                const moves = legalMovesForSquare(index);
                setSelectedSquare(index);
                setLegalMoves(moves);
                return;
            }
        }

        setSelectedSquare(null);
        setLegalMoves([]);
    };

    const renderSquares = () => {
        const squares = [];
        const colLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        for (let index = 0; index < 120; index++) {
            const piece = board[index];
            if (piece === C.BORDER) continue;

            const row = Math.floor(index / 10) - 2;
            const col = (index % 10) - 1;
            if (row < 0 || row > 7 || col < 0 || col > 7) continue;

            const x = coordOffset + col * squareSize;
            const y = (7 - row) * squareSize;
            const isLight = (row + col) % 2 === 0;
            const isSelected = index === selectedSquare;
            const lastMove = gameState.moveHistory.length > 0
                ? gameState.moveHistory[gameState.moveHistory.length - 1].move
                : null;
            const isLastMoveTo = lastMove?.to === index;
            const isLastMoveFrom = lastMove?.from === index;

            let fill = isLight ? '#EEEED2' : '#769656';
            if (isSelected) fill = isLight ? '#f6f669' : '#baca2b';
            else if (isLastMoveTo || isLastMoveFrom) fill = isLight ? '#cdd17a' : '#aaa23a';

            squares.push(
                <rect
                    key={`square-${index}`}
                    x={x} y={y}
                    width={squareSize} height={squareSize}
                    fill={fill}
                    onClick={() => handleSquareClick(index)}
                    style={{cursor: 'pointer'}}
                />
            );

            if (col === 0) {
                squares.push(
                    <text key={`rank-${row}`} x={coordOffset - 4} y={y + squareSize / 2 + 5}
                          fontSize="12" textAnchor="end" fill="#555"
                          style={{userSelect: 'none', pointerEvents: 'none'}}>
                        {row + 1}
                    </text>
                );
            }
            if (row === 0) {
                squares.push(
                    <text key={`file-${col}`} x={x + squareSize / 2} y={boardSize + 16}
                          fontSize="12" textAnchor="middle" fill="#555"
                          style={{userSelect: 'none', pointerEvents: 'none'}}>
                        {colLetters[col]}
                    </text>
                );
            }
        }
        return squares;
    };

    const renderPieces = () => {
        return board.map((piece, i) => {
            if (piece === C.BORDER || piece === C.EMPTY) return null;
            if (i === draggedFrom) return null;

            const row = Math.floor(i / 10) - 2;
            const col = (i % 10) - 1;
            if (row < 0 || row > 7 || col < 0 || col > 7) return null;

            const x = coordOffset + col * squareSize;
            const y = (7 - row) * squareSize;

            return (
                <text
                    key={`piece-${i}`}
                    x={x + squareSize / 2}
                    y={y + squareSize / 1.5}
                    fontSize="38"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    onMouseDown={(e) => handleMouseDown(i, e)}
                    onClick={() => handleSquareClick(i)}
                    style={{cursor: 'grab', userSelect: 'none'}}
                    fill={piece > 0 ? 'white' : 'black'}
                    stroke={piece > 0 ? '#444' : 'none'}
                    strokeWidth={piece > 0 ? '0.5' : '0'}
                >
                    {pieceToUnicode(piece)}
                </text>
            );
        });
    };

    const renderLegalMoveHints = () => {
        return legalMoves.map((move, i) => {
            const row = Math.floor(move.to / 10) - 2;
            const col = (move.to % 10) - 1;
            if (row < 0 || row > 7 || col < 0 || col > 7) return null;

            const cx = coordOffset + col * squareSize + squareSize / 2;
            const cy = (7 - row) * squareSize + squareSize / 2;
            const isCapture = board[move.to] !== C.EMPTY || move.enPassant;

            if (isCapture) {
                return (
                    <circle key={`hint-${i}`} cx={cx} cy={cy} r={squareSize / 2 - 2}
                            fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="5"
                            pointerEvents="none"/>
                );
            }
            return (
                <circle key={`hint-${i}`} cx={cx} cy={cy} r={10}
                        fill="rgba(0,0,0,0.25)" pointerEvents="none"/>
            );
        });
    };

    const renderDraggedPiece = () => {
        if (draggedPiece === null || !dragPosition) return null;
        const svg = document.querySelector('svg.chessboard') as SVGSVGElement | null;
        if (!svg) return null;
        const rect = svg.getBoundingClientRect();
        const x = dragPosition.x - rect.left;
        const y = dragPosition.y - rect.top;

        return (
            <text x={x} y={y} fontSize="44" textAnchor="middle" dominantBaseline="middle"
                  fill={draggedPiece > 0 ? 'white' : 'black'}
                  stroke={draggedPiece > 0 ? '#444' : 'none'} strokeWidth="0.5"
                  opacity={0.9} pointerEvents="none">
                {pieceToUnicode(draggedPiece)}
            </text>
        );
    };

    return (
        <div style={{position: 'relative', display: 'inline-block'}}>
            <svg
                className="chessboard"
                width={coordOffset + boardSize}
                height={boardSize + coordOffset}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{border: '2px solid #444', display: 'block'}}
            >
                {renderSquares()}
                {renderLegalMoveHints()}
                {renderPieces()}
                {renderDraggedPiece()}
            </svg>
            {promotionPending !== null && (
                <PromotionDialog
                    isWhite={currentTurn === 'white'}
                    onSelect={finishPromotion}
                />
            )}
        </div>
    );
};

export default Chessboard;
