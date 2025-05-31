import "./list.css";
import type {ListProps} from "../../types/props";
import type {Info} from "../../types/appTypes.ts";

const List = ({data}: ListProps<Info>) => {

    if (!data || data.length === 0) {
        return <p>No items to display</p>;
    }

    return (
        <ul className="space-y-2">
            {data && data.map((item: Info) => (
                <li key={item.id} className="flex items-center justify-between bg-white rounded shadow p-3">
                    <span className="text-gray-800">{item.text}</span>
                    <button
                        className="list-btn bg-blue-500 hover:bg-blue-600 rounded px-3 py-1 text-white transition cursor-pointer"
                        data-testid="btn-1"
                    >
                        {item.btnText}
                    </button>
                </li>
            ))}
        </ul>
    );
}
export default List;