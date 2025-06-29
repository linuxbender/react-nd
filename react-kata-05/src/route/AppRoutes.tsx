import {createBrowserRouter} from "react-router";
import App from "@/App.tsx";
import HomePage from "@/pages/HomePage.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";
import CanvasPage from "@/pages/CanvasPage.tsx";

const AppRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                errorElement: <ErrorPage/>
            },
            {
                path: 'home',
                element: <HomePage/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: 'canvas',
                element: <CanvasPage/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ],
        errorElement: <ErrorPage/>
    }
]);

export default AppRoutes;
