import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/index.css'
import {RouterProvider} from "react-router";
import AppRoutes from "@/route/AppRoutes.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={AppRoutes}/>
    </StrictMode>,
)
