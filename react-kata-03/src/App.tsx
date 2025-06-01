import {NavLink, Outlet} from "react-router";

const App = () => {
    return (
        <div className="flex h-screen">
            <nav className="w-48 bg-gray-100 p-4">
                <ul className="space-y-4">
                    <li>
                        <NavLink to={"/home"} className="text-blue-600 hover:underline">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/list" className="text-blue-600 hover:underline">Liste</NavLink>
                    </li>
                </ul>
            </nav>
            <main className="flex-1 p-4">
                <Outlet/>
            </main>
        </div>
    )
}

export default App
