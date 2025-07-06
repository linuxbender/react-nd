import {type FC} from "react";
import {Outlet} from "react-router";
import MainNavigation from "@/component/MainNavigation.tsx";
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/app.css';

export const App: FC = () => {
    return (
        <div id={'container'}>
            <MainNavigation/>
            <div id={'content'}>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;