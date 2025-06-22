import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import AppRoutes from "@/route/AppRoutes.tsx";
import '@fontsource/roboto/300.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={AppRoutes}/>
    </StrictMode>,
)
