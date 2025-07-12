import {createBrowserRouter} from "react-router";
import HomePage from "@/page/HomePage.tsx";
import ErrorPage from "@/page/ErrorPage.tsx";
import App from "@/App.tsx";

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: 'home',
                element: <HomePage/>,
                index: true,
            },
            {
                path: '*',
                errorElement: <ErrorPage/>
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
]);

export default BrowserRouter;