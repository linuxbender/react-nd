import {type FC} from "react";
import {NavLink} from "react-router";
import '@/component/MainNavigation.css';

const MainNavigation: FC = () => {

    return (
        <nav>
            <NavLink to={'/'} end
                     className={({isActive}) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to={'/page'}
                     className={({isActive}) => (isActive ? 'active' : '')}>Page</NavLink>
        </nav>
    )
}
export default MainNavigation;