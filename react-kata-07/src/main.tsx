import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import BrowserRouter from "@/BrowserRouter.tsx";
import {RouterProvider} from "react-router";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={BrowserRouter}/>
    </StrictMode>,
)
