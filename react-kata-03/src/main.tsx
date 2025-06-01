import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import ListPage from "./pages/listPage.tsx";
import ErrorPage from "./pages/errorPage.tsx";
import App from "./App.tsx";
import HomePage from "./pages/homePage.tsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'home',
                element: <HomePage/>,
            },
            {
                path: 'list',
                element: <ListPage/>,
            },
        ]
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={routes}/>
    </StrictMode>,
)
