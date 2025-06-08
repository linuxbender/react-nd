import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/index.css'
import App from '@/App.tsx'
import {ErrorPage} from "@/pages/ErrorPage.tsx";
import {HomePage} from "@/pages/HomePage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {RolePage} from "@/pages/RolePage.tsx";
import {ReactQueryZustandPage} from "@/pages/ReactQueryZustandPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import RoleManagement from "@/pages/RoleManagement.tsx";
import {Provider} from 'react-redux'
import {Store} from "@/store/Store.ts";

const container = document.getElementById('root')
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: 'home',
                element: <HomePage/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: 'role',
                element: <RolePage/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: 'react-query',
                element: <ReactQueryZustandPage/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: 'role-management',
                element: <RoleManagement/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: '*',
                element: <ErrorPage/>,
            }
        ]
    },
])
const queryClient = new QueryClient();
createRoot(container!).render(
    <StrictMode>
        <Provider store={Store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={routes}/>
            </QueryClientProvider>
        </Provider>
    </StrictMode>,
)
