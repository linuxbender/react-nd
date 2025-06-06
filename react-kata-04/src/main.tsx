import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import App from './App.tsx'
import {ErrorPage} from "./pages/ErrorPage.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {RolePage} from "./pages/RolePage.tsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                errorElement: <ErrorPage />,
            },
            {
                path: 'home',
                element: <HomePage/>,
                errorElement: <ErrorPage />,
            },
            {
                path: 'role',
                element: <RolePage/>,
                errorElement: <ErrorPage />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            }
        ]
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={routes}/>
    </StrictMode>,
)
