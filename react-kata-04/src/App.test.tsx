import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import App from '@/App';
import {MemoryRouter} from "react-router";

describe('App', () => {
    test('rendert without errors and text Kata 04', () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByText(/Kata 04/i)).toBeInTheDocument();
    });
});