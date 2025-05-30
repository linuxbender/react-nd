import "./list.css";

export type Info = {
    id: number;
    text: string;
    btnText: string;
}

export type ListProps<T> = {
    data: T[];
};

const List = ({data}: ListProps<Info>) => {

    if (!data || data.length === 0) {
        return <p>No items to display</p>;
    }

    return (
        <ul className="list">
            <li className="list__item">
                {data && data.map((item: Info) => (
                    <span key={item.id}>
                        <span className="list__item__text">{item.text}</span>
                        <button className="list__item__btn" data-testid="btn-1">{item.btnText}</button>
                    </span>
                ))}
            </li>
        </ul>
    );
}
export default List;