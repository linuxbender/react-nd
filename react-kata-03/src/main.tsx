import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.tsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={routes}/>
    </StrictMode>,
)
