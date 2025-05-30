import '@testing-library/jest-dom'
import {describe, expect, it} from "vitest"
import {fireEvent, render, screen} from '@testing-library/react'
import App from './App'

describe('TEST: App', () => {
    it('zeigt das Vite-Logo an', () => {
        render(<App/>)
        const viteLogo = screen.getByAltText('Vite logo')
        expect(viteLogo).toBeInTheDocument()
    })

    it("erhöht den Zähler mehrfach beim Klicken", () => {
        render(<App/>);
        const button = screen.getByTestId("btn");
        fireEvent.click(button);
        fireEvent.click(button);
        expect(button).toHaveTextContent("count is 2");
    });

})
