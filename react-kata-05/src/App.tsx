import {useState} from 'react'
import {Link, Outlet} from "react-router";
import '@/app.css'

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const title = 'The Force';

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                <div className="p-4 font-bold text-xl border-b">{title}</div>
                <nav className="p-4">
                    <ul>
                        <li className="py-2 hover:bg-gray-200 rounded cursor-pointer">
                            <Link to={'home'} onClick={() => setSidebarOpen(false)}>Home</Link>
                        </li>
                        <li className="py-2 hover:bg-gray-200 rounded cursor-pointer">Menu 2</li>
                        <li className="py-2 hover:bg-gray-200 rounded cursor-pointer">Menu 3</li>
                    </ul>
                </nav>
            </aside>
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex items-center justify-between bg-white p-4 shadow-md md:hidden">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-gray-700 focus:outline-none"
                        aria-label="Open sidebar"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                    <h1 className="font-bold text-lg">{title}</h1>
                    <div className="w-6"/>
                </header>
                <main className="p-4 overflow-auto flex-1">
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default App
