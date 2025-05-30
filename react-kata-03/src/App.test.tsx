import {afterEach, describe, expect, test} from "vitest";
import {cleanup, fireEvent, render, screen} from '@testing-library/react'
import App from './App'

afterEach(() => {
    cleanup();
});

describe('TEST: App', () => {
    test('zeigt das Vite-Logo an', () => {
        render(<App/>)
        const viteLogo = screen.getByAltText('Vite logo')
        expect(viteLogo).toBeInTheDocument()
    })

    test("erhöht den Zähler mehrfach beim Klicken", () => {
        render(<App/>);
        const button = screen.getByTestId("btn");
        fireEvent.click(button);
        fireEvent.click(button);
        expect(button).toHaveTextContent("count is 2");
    });

})
