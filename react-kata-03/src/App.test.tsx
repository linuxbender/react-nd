import '@testing-library/jest-dom'
import {describe, expect, it} from "vitest"
import {render, screen} from '@testing-library/react'
import App from './App'
import {MemoryRouter} from "react-router";

describe('App', () => {
    it('renders the navigation links', () => {
        render(<MemoryRouter><App/></MemoryRouter>)

        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Liste')).toBeInTheDocument()
    })
})
