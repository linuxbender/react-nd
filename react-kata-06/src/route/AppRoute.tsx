import {createBrowserRouter} from "react-router";
import App from "@/App.tsx";
import ErrorPage from "@/page/ErrorPage.tsx";
import HomePage from "@/page/HomePage.tsx";
import ExamplePage from "@/page/ExamplePage.tsx";

const AppRoute = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <HomePage/>,
                index: true,
                errorElement: <ErrorPage/>
            },
            {
                path: 'page',
                element: <ExamplePage/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
], {
    basename: '/index.html',
});
export default AppRoute;