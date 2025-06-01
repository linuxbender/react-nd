import type {Info} from "../types/appTypes.ts";
import List from "../components/list/List.tsx";

const ListPage = () => {
    const data: Info[] = [
        {id: 1, text: 'List Item 1', btnText: 'Button 1'},
        {id: 2, text: 'List Item 2', btnText: 'Button 2'},
        {id: 3, text: 'List Item 3', btnText: 'Button 3'}
    ];

    return (
        <div>
            <List data={data}/>
        </div>
    );
}

export default ListPage;