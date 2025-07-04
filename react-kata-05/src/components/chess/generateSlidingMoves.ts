import type {Board, Move} from "@/types/ChessTypes.ts";
import * as C from "@/types/ChessConstants.ts";

export const generateSlidingMoves = (
    board: Board,
    index: number,
    directions: number[],
    isWhite: boolean
): Move[] => {
    const moves: Move[] = [];

    for (const dir of directions) {
        let target = index + dir;

        while (board[target] !== C.BORDER) {
            const destination = board[target];

            // Leeres Feld → hinzufügen & weiter scannen
            if (destination === C.EMPTY) {
                moves.push({from: index, to: target});
                target += dir;
                continue;
            }

            // Gegnerische Figur → hinzufügen & stoppen
            if ((isWhite && destination < 0) || (!isWhite && destination > 0)) {
                moves.push({from: index, to: target, captured: destination});
            }

            break; // eigene Figur oder gegnerisch → abbrechen
        }
    }

    return moves;
};
