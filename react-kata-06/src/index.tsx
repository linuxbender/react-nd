import ReactDOM from "react-dom/client";
import {StrictMode} from "react";
import {RouterProvider} from "react-router/dom";
import AppRoute from "@/route/AppRoute.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={AppRoute}/>
    </StrictMode>
)