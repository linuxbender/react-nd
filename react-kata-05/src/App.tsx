import {useState} from 'react'
import {Link, Outlet} from "react-router";
import '@/app.css'

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const title = 'The Force';

    return (
        <div>
            <header>
                <div className="bg-gray-800 text-white p-4">
                    <h1 className="text-2xl font-bold">{title}</h1>
                </div>
            </header>
            <aside>
                <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
                        {sidebarOpen ? 'Close Menu' : 'Open Menu'}
                    </button>
                </div>
                {sidebarOpen && (
                    <nav className="bg-gray-700 text-white p-4">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/canvas">Canvas</Link></li>
                        </ul>
                    </nav>
                )}
            </aside>
            <main>
                <Outlet></Outlet>
            </main>
        </div>

    );
}

export default App
