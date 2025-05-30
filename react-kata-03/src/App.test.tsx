import '@testing-library/jest-dom'
import {describe, expect, it} from "vitest"
import {render, screen} from '@testing-library/react'
import App from './App'

describe('TEST: App', () => {
    it('zeigt den Titel "Vite + React" an', () => {
        render(<App/>)
        expect(screen.getByText('Vite + React')).toBeInTheDocument()
    })

    it('zeigt alle Listeneinträge korrekt an', () => {
        render(<App/>)
        expect(screen.getByText('Item 1')).toBeInTheDocument()
        expect(screen.getByText('Item 2')).toBeInTheDocument()
        expect(screen.getByText('Item 3')).toBeInTheDocument()
    })

    it('zeigt die Buttons mit korrektem Text an', () => {
        render(<App/>)
        expect(screen.getByText('Button 1')).toBeInTheDocument()
        expect(screen.getByText('Button 2')).toBeInTheDocument()
        expect(screen.getByText('Button 3')).toBeInTheDocument()
    })

})
