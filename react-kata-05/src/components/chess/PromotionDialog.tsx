import type {FC} from 'react';
import * as C from "@/types/ChessConstants.ts";
import {pieceToUnicode} from "@/utile/pieceUtils.ts";

interface PromotionDialogProps {
    isWhite: boolean;
    onSelect: (piece: number) => void;
}

const PromotionDialog: FC<PromotionDialogProps> = ({isWhite, onSelect}) => {
    const pieces = isWhite
        ? [C.WQ, C.WR, C.WB, C.WN]
        : [C.BQ, C.BR, C.BB, C.BN];

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            border: '2px solid #444',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
        }}>
            <div style={{fontWeight: 'bold', fontSize: '14px', color: '#333'}}>
                Bauernumwandlung – Figur wählen
            </div>
            <div style={{display: 'flex', gap: '8px'}}>
                {pieces.map(piece => (
                    <button
                        key={piece}
                        onClick={() => onSelect(piece)}
                        style={{
                            width: '56px',
                            height: '56px',
                            fontSize: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#f0f0f0',
                            border: '2px solid #999',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            color: isWhite ? 'white' : 'black',
                            textShadow: isWhite ? '0 0 2px #000' : 'none',
                        }}
                    >
                        {pieceToUnicode(piece)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PromotionDialog;
