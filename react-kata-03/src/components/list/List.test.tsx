import '@testing-library/jest-dom'
import {describe, expect, it} from "vitest"
import {render, screen} from '@testing-library/react';
import type {Info} from "../../types/appTypes.ts";
import List from "./List.tsx";

describe('List Komponente', () => {
    const data: Info[] = [
        { id: 1, text: 'Item 1', btnText: 'Button 1' },
        { id: 2, text: 'Item 2', btnText: 'Button 2' },
    ];

    it('zeigt "No items to display" wenn keine Daten vorhanden sind', () => {
        render(<List data={[]} />);
        expect(screen.getByText(/No items to display/i)).toBeInTheDocument();
    });

    it('zeigt alle Listeneinträge korrekt an', () => {
        render(<List data={data} />);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('zeigt die Buttons mit korrektem Text an', () => {
        render(<List data={data} />);
        expect(screen.getByText('Button 1')).toBeInTheDocument();
        expect(screen.getByText('Button 2')).toBeInTheDocument();
    });

    it('es gibt für jedes Item einen Button mit data-testid', () => {
        render(<List data={data} />);
        const buttons = screen.getAllByTestId('btn-1');
        expect(buttons).toHaveLength(data.length);
    });
});