import Chessboard from "@/components/chess/Chessboard.tsx";
import {useGameState} from "@/hooks/useGameState.ts";

const statusMessages: Record<string, string> = {
    playing: '',
    check: 'Schach!',
    checkmate: 'Schachmatt',
    stalemate: 'Patt – Unentschieden',
};

const ChessPage = () => {
    const {gameState, legalMovesForSquare, makeMove, finishPromotion, undoMove, resetGame} = useGameState();
    const {currentTurn, status, moveHistory} = gameState;

    const isGameOver = status === 'checkmate' || status === 'stalemate';

    const getTurnText = () => {
        if (status === 'checkmate') {
            const winner = currentTurn === 'white' ? 'Schwarz' : 'Weiß';
            return `${winner} gewinnt!`;
        }
        if (status === 'stalemate') return 'Patt!';
        const turn = currentTurn === 'white' ? 'Weiß' : 'Schwarz';
        return `${turn} am Zug`;
    };

    const statusColor = status === 'checkmate' || status === 'check' ? '#c0392b' :
        status === 'stalemate' ? '#e67e22' : '#2c3e50';

    const movePairs: { white?: string; black?: string }[] = [];
    for (let i = 0; i < moveHistory.length; i++) {
        if (i % 2 === 0) {
            movePairs.push({white: moveHistory[i].notation});
        } else {
            movePairs[movePairs.length - 1].black = moveHistory[i].notation;
        }
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            padding: '20px',
            fontFamily: 'Roboto, sans-serif',
        }}>
            <h2 style={{margin: 0, color: '#2c3e50'}}>Schach</h2>

            {/* Status Bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '10px 20px',
                background: '#f8f9fa',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                minWidth: '500px',
                justifyContent: 'space-between',
            }}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <div style={{
                        width: '20px', height: '20px',
                        borderRadius: '50%',
                        background: currentTurn === 'white' ? 'white' : '#333',
                        border: '2px solid #555',
                    }}/>
                    <span style={{fontWeight: 'bold', color: statusColor, fontSize: '16px'}}>
                        {getTurnText()}
                    </span>
                    {status === 'check' && (
                        <span style={{
                            background: '#c0392b', color: 'white',
                            padding: '2px 8px', borderRadius: '4px', fontSize: '13px',
                        }}>
                            {statusMessages.check}
                        </span>
                    )}
                </div>
                <div style={{display: 'flex', gap: '8px'}}>
                    <button
                        onClick={undoMove}
                        disabled={moveHistory.length === 0 || isGameOver}
                        style={{
                            padding: '6px 14px',
                            background: moveHistory.length === 0 || isGameOver ? '#ccc' : '#3498db',
                            color: 'white', border: 'none', borderRadius: '4px',
                            cursor: moveHistory.length === 0 || isGameOver ? 'not-allowed' : 'pointer',
                            fontSize: '14px',
                        }}
                    >
                        Undo
                    </button>
                    <button
                        onClick={resetGame}
                        style={{
                            padding: '6px 14px',
                            background: '#27ae60',
                            color: 'white', border: 'none', borderRadius: '4px',
                            cursor: 'pointer', fontSize: '14px',
                        }}
                    >
                        Neues Spiel
                    </button>
                </div>
            </div>

            {/* Board + History nebeneinander */}
            <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
                <Chessboard
                    gameState={gameState}
                    legalMovesForSquare={legalMovesForSquare}
                    makeMove={makeMove}
                    finishPromotion={finishPromotion}
                />

                {/* Zughistorie */}
                <div style={{
                    width: '180px',
                    border: '1px solid #dee2e6',
                    borderRadius: '8px',
                    background: '#f8f9fa',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '500px',
                }}>
                    <div style={{
                        padding: '8px 12px',
                        background: '#2c3e50',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '14px',
                    }}>
                        Zughistorie
                    </div>
                    <div style={{overflowY: 'auto', flex: 1}}>
                        {movePairs.length === 0 ? (
                            <div style={{padding: '12px', color: '#888', fontSize: '13px'}}>
                                Noch keine Züge
                            </div>
                        ) : (
                            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                                <thead>
                                    <tr style={{background: '#e9ecef'}}>
                                        <th style={{padding: '4px 8px', textAlign: 'left', width: '30px'}}>#</th>
                                        <th style={{padding: '4px 8px', textAlign: 'left'}}>Weiß</th>
                                        <th style={{padding: '4px 8px', textAlign: 'left'}}>Schwarz</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movePairs.map((pair, i) => (
                                        <tr key={i} style={{
                                            background: i % 2 === 0 ? 'white' : '#f8f9fa',
                                            borderTop: '1px solid #dee2e6',
                                        }}>
                                            <td style={{padding: '4px 8px', color: '#888'}}>{i + 1}</td>
                                            <td style={{padding: '4px 8px', fontFamily: 'monospace'}}>{pair.white}</td>
                                            <td style={{padding: '4px 8px', fontFamily: 'monospace'}}>{pair.black ?? ''}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>

            {isGameOver && (
                <div style={{
                    padding: '12px 24px',
                    background: status === 'checkmate' ? '#c0392b' : '#e67e22',
                    color: 'white',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                }}>
                    {status === 'checkmate'
                        ? `Schachmatt! ${currentTurn === 'white' ? 'Schwarz' : 'Weiß'} gewinnt!`
                        : 'Patt! Das Spiel endet unentschieden.'}
                </div>
            )}
        </div>
    );
};

export default ChessPage;
