import {NavLink, Outlet} from "react-router";

const App = () => {
    return (
        <div className="flex h-screen">
            <nav className="relative w-48 bg-gray-100 p-4">
                <input
                    type="text"
                    placeholder="Suche..."
                    className="w-full mb-4 p-2 border border-gray-300 rounded pr-10"
                />
                <button
                    type="submit"
                    className="absolute right-6 top-6 text-gray-500 cursor-pointer"
                    style={{marginTop: '4px', marginRight: '8px'}}
                    aria-label="Suche"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </button>
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
