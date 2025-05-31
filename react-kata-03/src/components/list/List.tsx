import "./list.css";
import type {ListProps} from "../../types/props";
import type {Info} from "../../types/appTypes.ts";

const List = ({data}: ListProps<Info>) => {

    if (!data || data.length === 0) {
        return <p>No items to display</p>;
    }

    return (
        <ul className="list-ul">
            {data && data.map((item: Info) => (
                <li key={item.id} className="list-item">
                    <span className="list-text">{item.text}</span>
                    <button
                        className="list-btn"
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