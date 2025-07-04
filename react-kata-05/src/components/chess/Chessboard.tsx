import {type FC, useState} from 'react';
import type {Board, Move} from "@/types/ChessTypes.ts";
import {createInitialBoard} from "@/utile/boardUtils.ts";
import {generateKnightMoves} from "@/components/chess/generateKnightMoves.ts";
import {generateSlidingMoves} from "@/components/chess/generateSlidingMoves.ts";
import {bishopDirections, queenDirections, rookDirections} from "@/components/chess/moveOffsets.ts";
import * as C from "@/types/ChessConstants.ts";
import {pieceToUnicode} from "@/utile/pieceUtils.ts";

const squareSize = 60;

const Chessboard: FC = () => {
    const [board, setBoard] = useState<Board>(createInitialBoard());
    const [draggedFrom, setDraggedFrom] = useState<number | null>(null);
    const [draggedPiece, setDraggedPiece] = useState<number | null>(null);
    const [legalMoves, setLegalMoves] = useState<Move[]>([]);
    const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);

    const handleMouseDown = (index: number, event: React.MouseEvent) => {
        const piece = board[index];
        if (piece === C.EMPTY || piece === C.BORDER) return;
        if (piece < 0) return; // Nur weiße Figuren für diesen Schritt

        let moves: Move[] = [];
        if (piece === C.WN) {
            moves = generateKnightMoves(board, index);
        } else if (piece === C.WB) {
            moves = generateSlidingMoves(board, index, bishopDirections, true);
        } else if (piece === C.WR) {
            moves = generateSlidingMoves(board, index, rookDirections, true);
        } else if (piece === C.WQ) {
            moves = generateSlidingMoves(board, index, queenDirections, true);
        }

        setDraggedFrom(index);
        setDraggedPiece(piece);
        setLegalMoves(moves);
        setDragPosition({x: event.clientX, y: event.clientY});
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
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const col = Math.floor(x / squareSize);
        const row = 7 - Math.floor(y / squareSize);
        const toIndex = (row + 2) * 10 + (col + 1);

        const move = legalMoves.find(m => m.to === toIndex);

        if (move) {
            const newBoard = [...board];
            newBoard[move.to] = draggedPiece;
            newBoard[draggedFrom] = C.EMPTY;
            setBoard(newBoard);
        }

        setDraggedFrom(null);
        setDraggedPiece(null);
        setLegalMoves([]);
        setDragPosition(null);
    };

    const renderSquares = () => {
        const squares = [];

        for (let index = 0; index < 120; index++) {
            const piece = board[index];
            if (piece === C.BORDER) continue;

            const row = Math.floor(index / 10) - 2;
            const col = (index % 10) - 1;

            if (row < 0 || row > 7 || col < 0 || col > 7) continue;

            const x = col * squareSize;
            const y = (7 - row) * squareSize;
            const isLight = (row + col) % 2 === 0;
            const fill = isLight ? '#EEEED2' : '#769656';

            squares.push(
                <rect
                    key={`square-${index}`}
                    x={x}
                    y={y}
                    width={squareSize}
                    height={squareSize}
                    fill={fill}
                />
            );
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

            const x = col * squareSize;
            const y = (7 - row) * squareSize;

            return (
                <text
                    key={`piece-${i}`}
                    x={x + squareSize / 2}
                    y={y + squareSize / 1.5}
                    fontSize="36"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    onMouseDown={(e) => handleMouseDown(i, e)}
                    style={{cursor: 'grab', userSelect: 'none'}}
                    fill={piece > 0 ? 'white' : 'black'}
                >
                    {pieceToUnicode(piece)}
                </text>
            );
        });
    };

    const renderGhostMoves = () => {
        return legalMoves.map((move, i) => {
            const row = Math.floor(move.to / 10) - 2;
            const col = (move.to % 10) - 1;
            if (row < 0 || row > 7 || col < 0 || col > 7) return null;

            const cx = col * squareSize + squareSize / 2;
            const cy = (7 - row) * squareSize + squareSize / 2;

            return (
                <circle
                    key={`ghost-${i}`}
                    cx={cx}
                    cy={cy}
                    r={10}
                    fill="red"
                    opacity={0.4}
                />
            );
        });
    };

    const renderDraggedPiece = () => {
        if (draggedPiece === null || !dragPosition) return null;

        return (
            <text
                x={dragPosition.x - squareSize / 2}
                y={dragPosition.y - squareSize / 2}
                fontSize="36"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="gray"
                opacity={0.6}
                pointerEvents="none"
            >
                {pieceToUnicode(draggedPiece)}
            </text>
        );
    };

    return (
        <svg
            width={squareSize * 8}
            height={squareSize * 8}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{border: '2px solid #444'}}
        >
            {renderSquares()}
            {renderGhostMoves()}
            {renderPieces()}
            {renderDraggedPiece()}
        </svg>
    );
};

export default Chessboard;
