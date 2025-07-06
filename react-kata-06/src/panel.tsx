import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'

export const Panel = () => {
    return (
        <iframe
            src="https://example.com/"
            style={{width: '100%', height: '100vh', border: 'none'}}
            title="Kata - 06 - Panel">
        </iframe>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Panel/>
    </StrictMode>
)
