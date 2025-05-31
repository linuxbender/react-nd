import List from "./components/list/List.tsx";
import type {Info} from "./types/appTypes.ts";

const App = () => {

    const data: Info[] = [
        {id: 1, text: 'List Item 1', btnText: 'Button 1'},
        {id: 2, text: 'List Item 2', btnText: 'Button 2'},
        {id: 3, text: 'List Item 3', btnText: 'Button 3'}
    ];

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <List data={data}/>
            </div>

        </>
    )
}

export default App
